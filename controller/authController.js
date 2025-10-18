import {compare, hash} from "../utils/hashUtil.js";
import UserModel from "../models/userModel.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";
import { request } from "express";

export const register = async (req, res) => {
    try {
        //Untuk mengambil body atau data dari request
        const request = req.body
        console.log(request);

        const hashPassword =await hash(request.password)

        await UserModel.create({
            username : request.username,
            email : request.email,
            password : hashPassword
        })

        res.status(201).json ({
            message : "Berhasil register, silahkan login",
            data : null
        })
    }
    catch(e) {
        res.status(500).json ({
            message : e.message,
            data : null
        })
    }
}

export const login = async (req,res) => {
    try {
        const request = req.body
        console.log(request);

        //Mencari user berdasarkan email
        const user = await UserModel.findOne({
            email: request.email
        })
        const isPasswordMatch = compare(request.password, user.password);
        //Jika user tidak ditemukan
        if(!isPasswordMatch) {
            res.status(404).json ({
                message: "User tidak ditemukan",
                data: null
            })
        }

        //membandingkan password yang ada di dalam db dengan request
        if(await compare(request.password, user.password)){
            return res.status(200).json({
                message: "Login berhasil",
                data: {
                    username: user.username,
                    email: user.email,
                    token: jwtSignUtil(user) //Melakukan sign JWT Token
                }
            })
        }
        return res.status(401).json({
                message: "Login gagal",
                data: null
            })
        
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null
        })
    }
}
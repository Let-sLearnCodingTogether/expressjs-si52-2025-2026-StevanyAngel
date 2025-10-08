import {hash} from "bcrypt";
import UserModel from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        //Untuk mengambil body atau data dari request
        const registerData = req.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
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
        const loginData = req.body

        //Mencari user berdasarkan email
        const user = await UserModel.findOne({
            email: loginData.email
        })

        //Jika user tidak ditemukan
        if(!user) {
            res.status(404).json ({
                message: "User tidak ditemukan",
                data: null
            })
        }

        //membandingkan password yang ada di dalam db dengan request
        if(user.password == loginData.password){
            return res.status(200).json({
                message: "Login berhasil",
                data: {
                    username: user.username,
                    email: user.email,
                    token: "TOKEN"
                }
            })
        }
        return res.status(401).json({
                message: "Login gagal",
                data: null
            })
        
    } catch (errpr) {
        res.status(500).json({
            message: error,
            data: null
        })
    }
}
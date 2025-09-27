import { render } from "ejs"
import express from "express"
import * as profileController from "../controller/profileController.js"
import * as profileCont from "../controller/profileCont.js"

const web = express.Router()

web.get('/', (req, res) => {
    res.render ('index')
})

web.get('/:username', profileController.publicProfile)
web.get('/:profile/:username', profileCont.publicProfile)

export default web

import express from "express"

const app = express()

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get('/mahasiswa', (req,res) => {
    res.send("Halaman Mahasiswa 12121")
})

app.get('/mahasiswa/:npm/:age', (req,res) => {
    const npm = req.params.npm
    const age = req.params.age
    res.send(`Npm : ${npm}, umur : ${age}`)
})

app.get('/mahasiswa-optional{/:npm}', (req,res) => {
    const npm = req.params.npm ?? 'Tanpa NPM'
    res.send(`Npm : ${npm}`)
})

app.get('/search-mahasiswa', (req,res) => {
    res.send("Search Mahasiswa")
})

app.get('/status', (req,res) => {
    res.send("<h1>Server is running</h1>")
})

app.get('/profile', (req,res) => {
    const profile = {
        npm : "2327240033",
        nama : "Nama"
    }
    res.status(200).json(profile)
})

app.get('/profile{/:npm}', (req,res) => {
    const npm = req.params.npm ?? 'Tanpa NPM'

    const profile = {
        npm : npm,
        nama : "Nama"
    }
    res.status(200).json(profile)
})

app.listen("3000", () => {
    console.log("App berjalan di : http://localhost:3000");
})


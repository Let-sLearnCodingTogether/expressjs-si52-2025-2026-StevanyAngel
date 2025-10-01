import express from "express"
import web from "./routes/web.js"
import api from "./routes/api.js"

app.use('/profile', profileRoutes);

const app = express()

app.use(express.json())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(web)
app.use("/api", api)

app.get('/', (res, req) =>{
    
})

app.listen("3000", () => {
    console.log('App berjalan di : http://localhost:3000');
})

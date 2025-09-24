import express from "express"
import web from "./routes/web.js"

const app = express()

app.use(express.json())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(web)

app.get('/', (res, req) =>{
    
})

app.listen("3000", () => {
    console.log('App berjalan di : http://localhost:3000');
})

app.get('/', (req, res) => {
  res.render('namaFileAnda', { 
    title: 'Profile Card',
    username: 'Stevany Angel',
    bio: 'Hiduplah seperti lary si lobster'
  });
});
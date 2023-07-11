const express = require("express")
const connectDB = require('./server/config/db')
const expressLayout = require('express-ejs-layouts')

const app = express()
const PORT = 5000
connectDB()

app.set('view engine', 'ejs')
// Templating engine 
app.use(expressLayout)
app.set('layout', './layouts/main')
app.use(express.static('public'));

app.get('/home', (req, res) =>{
    res.render('index.ejs')
})

app.get('/about', (req, res) =>{
    res.render("about.ejs")
})

app.get('/contact', (req, res) =>{
    res.render("contact.ejs")
})

app.listen(PORT,()=>{
    console.log(`App started at port ${PORT}`)
})
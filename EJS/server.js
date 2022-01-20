const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (resquest, response) {
    response.render("index")
})

app.get("/about", function (resquest, response) {
    response.render("about") 
})

app.listen(8080)
console.log('Rodando...');

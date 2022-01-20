const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function (resquest, response) {
    const items = [
        {
            title: 'D',
            message: 'esenvolver soluções'
        },
        {
            title: 'E',
            message: 'voluir'
        },
        {
            title: 'M',
            message: 'arcar as pessoas'
        },
        {
            title: 'A',
            message: 'prender sempre'
        },
        {
            title: 'I',
            message: 'r mais longe'
        },
        {
            title: 'S',
            message: 'aber o seu lugar'
        }
    ]
    const subtitle = 'O EJS é uma linguagem de modelagem para criação de página HTML'
    response.render("pages/index", {
        acronym: items,
        subtitle: subtitle
    })
})

app.get("/about", function (resquest, response) {
    response.render("pages/about") 
})

app.listen(8080)
console.log('Servidor funcionando!')

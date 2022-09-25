const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

const products = [
    {
        name: "Escova",
        category: "Saúde",
        price: "R$10,00",
        route: "/escova"
    }, 
    {
        name: "Relógio",
        category: "Acessórios",
        price: "R$250,00",
        route: "/relogio"
    },
    {
        name: "Monitor",
        category: "Tech",
        price: "R$1000,00",
        route: "/monitor"
    }
]

app.get("/", (req, res) => {
    res.render("home", {products})
})

app.get("/escova", (req, res) => {
    const info = products[0]
    res.render("individuals", {info})
})

app.get("/relogio", (req, res) => {
    const info = products[1]
    res.render("individuals", {info})})

app.get("/monitor", (req, res) => {
    const info = products[2]
    res.render("individuals", {info})})

app.listen(3000)
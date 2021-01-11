const express = require("express");
const app = express();

// AnimeJS
const animejs = require("animejs");

const hbs = require("hbs");

// Setting port
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials/");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index", {
        nombre: "Marcos",
        apellido: "Bonifasi",
        anio: new Date().getFullYear(),
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
const express = require("express");
const app = express();

// AnimeJS
const animejs = require("animejs");

const hbs = require("hbs");
require("./hbs/helpers");

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
        ciudad: " Guatemala, Ciudad de Guatemala",
        verse: {
            verse: "Entonces tu luz despuntará como la aurora, y tu recuperación brotará con rapidez; delante de ti irá tu justicia; y la gloria del Señor será tu retaguardia.",
            cite: "Isaías 58:8 LBLA",
        },
        facebook: "Marcos Bonifasi",
        instagram: "@marcos.bonifasi",
        linkedin: "Marcos Daniel Bonifasi de León ",
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
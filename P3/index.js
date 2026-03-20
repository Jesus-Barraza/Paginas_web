const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/orrico", (req, res) => {
    res.send("Orrico te observa desde las redes")
});

app.get("/dagoberto", (req, res) => {
    res.send("Programar es pensar -Dago")
});

app.get("/bravito", (req, res) => {
    const nombre = req.query.nombre;
    res.send(`Ande ande ${nombre}`);
});

app.post("/juanpis", (req,res) => {
    const {nombre, edad} = req.body;
    res.send(`Alumno ${nombre} con edad de ${edad} cinco minutos...`)
})

app.listen(3000, () => {
    console.log("Servidor jalando machin en localhost:3000")
})
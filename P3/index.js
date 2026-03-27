const express = require("express");
const cors = require("cors");
const session = require("express-session")
const bcrypt = require("bcrypt")
const path = require("path");
const db = require("./data/bd.js")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/alumnos", (req, res) => {
    db.query("SELECT * FROM alumnos", (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results)
    });
});

app.post("/alumnos/agregar", (req, res) => {
    const {nombre, grupo} = req.body;
    const sql = "INSERT INTO alumnos (nombre, grupo) VALUES (?, ?)";
    db.query(sql, [nombre, grupo], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("usuario creado")
    });
});

app.put("/alumnos/:id", (req, res) => {
    const {id} = req.params;
    const {nombre, grupo} = req.body
    const sql = "UPDATE alumnos SET nombre = ?, grupo = ? WHERE id = ?"
    db.query(sql, [nombre, grupo, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            res.send("usuario actualizado");
        }
    });
});

app.delete("/alumnos/:id", (req, es) => {
    const {id} = req.params
    const sql = "DELETE FROM alumnos WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            res.send("usuario actualizado")
        }
    });
});

app.get("/alumnos/:id", (req, res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM alumnos WHERE id = ?"
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).send(err)
        } else {
            res.json(results)
        }
    });
});

//Lo de la sesión
app.use(express.json())
app.use(session({
    secret: "secreto",
    resave: false,
    saveUnitialized: true,
}))

app.post("/usuarios", async (req, res) => {
    try {
        const {nombre, correo, contrasenha} = req.body
        contrasenha = await bcrypt.password(contrasenha, 10);
        const sql = "INSERT INTO usuarios (nombre, correo, contrasenha) VALUES ?, ?, ?"
        db.query(sql, [nombre, correo, contrasenha], (err, results) => {
            if (err) {
                return res.status(500).send(err)
            } else {
                res.send(results)
            }
        })
    } catch (err) {
        res.status(500).send(err)
    }
});

app.post("/login", async (req, res) => {
    const {correo, contrasenha} = req.body
    sql = "SELECT * FROM usuarios WHERE email = ?"
    db.query(sql, [correo], async (err, results) => {
        if (results.length == 0) {
            return res.status(401).send("Usuario no encontrado")   
        } else {
            const usuario = results [0]
            const ver = await bcrypt.compare(contrasenha, usuario.contrasenha)
            if (ver) {
                req.session.usuario = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                }
            } else {
                return res.status(400).send("Contraseña incorrecta")
            }
        }
    });
});

app.get("/perfil", (req, res) => {
    if (!req.session.usuario) {
        return res.status(401).send("No autorizado")
    } else {
        res.json(req.session.usuario);
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Sesión cerrada")
})

/*
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
*/

app.listen(3000, () => {
    console.log("Servidor jalando machin en localhost:3000")
})
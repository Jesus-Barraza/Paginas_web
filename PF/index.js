//importaciones
const express = require("express");
const cors = require("cors");
const session = require("express-session")
const bcrypt = require("bcrypt")
const path = require("path");
const db = require("./data/bd.js")

//Aplicación
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));

//Lo del inicio de sesión (punto 1)
//sesión
app.use(session({
    secret: "secreto",
    resave: false,
    saveUnitialized: true,
}));

//Registro
app.post("/usuarios", async (req, res) => {
    try {
        const {nombre, correo, telefono, contra} = req.body
        const contraHash = await bcrypt.hash(contra, 10);
        const sql = "INSERT INTO sesiones (nombre, correo, telefono, contra) VALUES (?, ?, ?, ?)"
        db.query(sql, [nombre, correo, telefono, contraHash], (err, results) => {
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

//Inicio de sesión
app.post("/login", async (req, res) => {
    const {correo, telefono, contra} = req.body
    const sql = "SELECT * FROM sesiones WHERE correo = ? OR telefono = ?"
    db.query(sql, [correo, telefono], async (err, results) => {
        if (results.length == 0) {
            return res.status(401).send("Usuario no encontrado")
        } else {
            const usuario = results [0]
            const ver = await bcrypt.compare(contra, usuario.contra)
            if (ver) {
                req.session.usuario = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                }
                res.send("Inicio de sesión exitoso")
            } else {
                return res.status(400).send("Contraseña incorrecta")
            };
        };
    });
});

//Cierre de sesión
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Sesión cerrada")
});

//Manejo de sesiones (punto 2)
//Datos del perfil
app.get("/perfil", (req, res) => {
    if (!req.session.usuario) {
        return res.status(401).send("No autorizado")
    } else {
        res.json(req.session.usuario);
    }
});

//Operaciones CRUD (punto 4)
//Selección completa de datos
app.get("/reserva", (req, res) => {
    db.query("SELECT * FROM reservas", (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results)
    });
});

//Selección parcial de datos
app.get("/reserva/:nombre_grupo", (req, res) => {
    const {nombre_grupo} = req.params;
    const sql = "SELECT * FROM reservas WHERE nombre_grupo LIKE ?"
    db.query(sql, [`%${nombre_grupo}%`], (err, results) => {
        if (err) {
            return res.status(500).send(err)
        } else {
            res.json(results)
        }
    });
});

//Añadido de datos
app.post("/reserva/agregar", (req, res) => {
    const {nombre_grupo, fecha, habitacion} = req.body;
    const sql = "INSERT INTO reservas (nombre_grupo, fecha, habitacion) VALUES (?, ?, ?)";
    db.query(sql, [nombre_grupo, fecha, habitacion], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("usuario creado", result)
    });
});

//Actualización de datos
app.put("/reserva/:id", (req, res) => {
    const {id} = req.params;
    const {nombre_grupo, fecha, habitacion} = req.body
    const sql = "UPDATE reservas SET nombre_grupo = ?, fecha = ?, habitacion = ? WHERE id = ?"
    db.query(sql, [nombre_grupo, fecha, habitacion, id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            res.send("usuario actualizado", result);
        }
    });
});

//Eliminación de datos
app.delete("/reserva/:id", (req, res) => {
    const {id} = req.params
    const sql = "DELETE FROM reservas WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            res.send("usuario actualizado")
        }
    });
});

//Apertura de la página web (si...)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/inicio.html'));
});

//El servidor (para iniciar el servidor no pos si-)
app.listen(3000, () => {
    console.log("Servidor jalando machin en localhost:3000")
});
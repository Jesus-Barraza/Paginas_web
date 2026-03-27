const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "::1",
    user: "movil",
    password: "movil",
    database: "escuela",
});

db.connect(err => {
    if(err) {
        console.error("Error de conexión: ", err)
    } else {
        console.log("Conexión exitosa a Mysql")
    }
});

module.exports = db;
//Base de datos (punto 3)
//Importaciones
const mysql = require("mysql2");

//Conexión a la base de datos (usando root por hueva)
const db = mysql.createConnection({
    host: "::1",
    user: "root",
    password : "",
    database: "pf",
});

//Evaluación de conexión
db.connect(err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Conexión exitosa al MYSQL, ahora dale we-");
    };
});

//Exportación porque si no no funciona
module.exports = db
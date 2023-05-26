const mysql = require("mysql");

//creacion de un objeto config, que contiene los datos de la base de datos

const config = {
    host: "localhost",
    user: 'admin.nodejs',
    password: 'Ko2001280071401',
    database: 'happylife',
    port:3306
};

const conn = mysql.createConnection(config);

conn.connect(function (err) {
    if (err) {

    }else{
        console.log("Starting to the Database")
    }
});

module.exports = conn;
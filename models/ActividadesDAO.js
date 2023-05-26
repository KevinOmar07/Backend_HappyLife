const conn = require("../ConexionMysql");

const addDiario = (diario, callback) =>{
    const sql = "insert into diarioemocional set ?";

    conn.query(sql, diario, (err, data) =>{
        if(err)
            return callback(null);
        else
            return callback(data);
    })
}

const getBaul = (idUsuario, okCallback, failCallback) =>{
    let sql = "SELECT * FROM baul where idUsuario = ?";
    conn.query(sql, idUsuario,(err,data) => {
        if (err)
            return failCallback(err)
        else{
            return okCallback(data)
        }
    })
}

const addBaul= (recuerdos, callback) =>{
    const sql = "insert into baul set ?";

    conn.query(sql, recuerdos, (err, data) =>{
        if(err)
            return callback(null);
        else
            return callback(data);
    })
}

const addTextRF = (rf, callback) => {
    const sql = "insert into rinconfelicidad  set ?";
    conn.query(sql,rf, (err, data) => {
        if(err)
            return callback(null);
        else
            return callback(data);
    })
}

const getTextRF = (idUsuario,callback) => {
    const sql = "SELECT * FROM rinconfelicidad where idUsuario= '"+idUsuario+"'";
    conn.query(sql,(err, data) =>{
        if(err)
            return callback(null);
        else
            return callback(data);
    })
}


module.exports = {
    addDiario,
    getBaul,
    addBaul,
    addTextRF,
    getTextRF
}
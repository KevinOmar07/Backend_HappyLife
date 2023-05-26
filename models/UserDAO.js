const conn = require("../ConexionMysql");
const bcrypt = require('bcrypt')
 const getUser = (user,callback) => {
    const sql2 = "select * from usuario where correo= '"+user.correo+"'";
    conn.query(sql2,(err,data) => {
      if (data.length>0){
          console.log(data);
          let result = bcrypt.compareSync(user.pass,data[0].password);
          if (result){
              return callback(data);
          }else{
              return callback(null);
          }
      }else{
          return callback(null);
      }
    })
  }

  const validarCorreo = (correo, callback) =>{
      let sql = "select * from usuario where correo='"+correo+"'";
      conn.query(sql,correo, (err, data) => {
          if (err) throw err

          if (data.length>0)
              callback(data[0]) //Enviar el primer registro de la consulta
          else
              callback(null)
      })
  }

  const getUserId = (idUser,callback) => {
    let sql = "select * from usuario where idUsuario='"+idUser+"'";
    conn.query(sql,(err,data) =>{
        if (err)
            return callback(null);
        else
            return callback(data);
    })
  }


  const addUser = (user, callback) => {

     const sql = "insert into usuario set ?";

     conn.query(sql,user, (err,data) => {

         if (err)
             return callback(null);
         else
             console.log(data);
             return callback(data);

     })
  }

  module.exports = {
      getUser,
      addUser,
      getUserId,
      validarCorreo
  }

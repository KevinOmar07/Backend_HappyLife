const userSignInDAO = require("../models/UserDAO");
const bcrypt = require('bcrypt');
const jwt = require('../utils/generatejwt')


const getUserId = (req,res) => {
    userSignInDAO.getUserId(req.query.idUsuario, (data)=> {
        if (data != null) {
            res.send({
                status: true,
                message: 'Usuario encontrado exitosamente',
                body: data
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al encontrar la cuenta'
            })
        }
    })
}

const validarCorreo = (req, res) =>{
    userSignInDAO.validarCorreo(req.query.correo, (data) =>{
        try {
            if (!data) throw new Err("Correo ocupado")

            res.send({
                status: true,
                message: 'Correo ocupado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Correo disponible'
            })
        }
    })
}

const getUserSignIn = (req, res) => {

    const user = {
        correo: req.body.correo,
        pass: req.body.pass
    }
    console.log(req.body.correo);
    console.log(req.body.pass);
        userSignInDAO.getUser(user,(data) => {
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Usuario encontrado exitosamente',
                    body: data,
                    token: jwt.generateToken(data)
                })
            }
            else {
                res.send({
                    status:false,
                    message: 'Correo o contraseña incorrectos'
                })
            }
        })
}
const addUser = (req, res) => {

    const cry = bcrypt.hashSync(req.body.password,10);

    const user = {
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: cry.toString(),
        nombreUsuario: req.body.nombreUsuario,
        fechaNacimiento: req.body.fechaNacimiento.toString()
    }
    console.log(cry);

    userSignInDAO.addUser(user, (data)=> {
        if (data && data.affectedRows === 1) {
            res.send({
                body:data,
                status: true,
                message: 'Usuario creado exitosamente'
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al crear la cuenta de usuario'
            })
        }
    })
}

module.exports = {
    getUserSignIn,
    addUser,
    getUserId,
    validarCorreo
}
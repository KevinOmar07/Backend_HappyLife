const actividadesDAO = require("../models/ActividadesDAO");

const addDiario = (req, res) =>{

    const diario ={
        descripcionEmocion: req.body.descripcionEmocion,
        motivoEmocion: req.body.motivoEmocion,
        idUsuario: req.body.idUsuario
    }

    actividadesDAO.addDiario(diario, (data) =>{
        if (data && data.affectedRows === 1) {
            res.send({
                body:data,
                status: true,
                message: 'Diario agregado correctamente'
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al agregar el diario'
            })
        }
    })
}

const getBaul = (req, res) => {

    console.log(req.query.idUsuario + " holaw")

    actividadesDAO.getBaul(req.query.idUsuario,(data) => {
        console.log(data+" hola llego aquiw");
        res.send({
            status: true,
            body: data
        })

    }, err =>{
        res.send({
            status: false,
            msg: "no se obtuvo ningun dato"
        })
    })
}

const addBaul = (req, res) =>{

    const recuerdos ={
        titulo: req.body.titulo,
        descripcionRecuerdo: req.body.descripcionRecuerdo,
        porque: req.body.porque,
        idUsuario: req.body.idUsuario
    }

    actividadesDAO.addBaul(recuerdos, (data) =>{
        if (data && data.affectedRows === 1) {
            res.send({
                body:data,
                status: true,
                message: 'Recuerdo agregado correctamente'
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al agregar el recuerdo'
            })
        }
    })
}

const addTextRF = (req,res)=>{
    const rf = {
        cosasFeliz: req.body.cosasFeliz,
        idUsuario: req.body.idUsuario
    }
    actividadesDAO.addTextRF(rf,(data)=> {
        if (data && data.affectedRows === 1) {
            res.send({
                body:data,
                status: true,
                message: ' agregado correctamente'
            })
        }
        else {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al agregar :('
            })
        }
    })
}

const getTextRF = (req,res) => {
    console.log(req.query.idUsuario);
    actividadesDAO.getTextRF(req.query.idUsuario,(data)=> {
        if (data!=null) {
            res.send({
                body:data,
                status: true,
            })
        }
        else {
            res.send({
                status:false,
                message: 'Hno se pudo obtener'
            })
        }
    })
}

module.exports = {
    addDiario,
    getBaul,
    addBaul,
    addTextRF,
    getTextRF
}
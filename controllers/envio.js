const {response} = require('express')

const Envio = require('../models/envio')

const getEnvio = async(req, res) => {

    const envios = await Envio.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: envios
    })
}

const postEnvio = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const envio = new Envio(datos)
        console.log(envio) //Instanciar el objeto
        await envio.save() //Guardar en la base de dato
        console.log(envio)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putEnvio = async(req, res) => {
    const { cedula, nombre, apellido, email, telefono, direccion, ciudad, postal, pais, departamento, valor } = req.body //Desesctructurar
    console.log(req.body)
    let mensaje = ''
    try {
        const envio = await Envio.findOneAndUpdate({cedula: cedula},
        {nombre: nombre, apellido:apellido, email:email, telefono:telefono, direccion: direccion, ciudad: ciudad, postal:postal, pais: pais, departamento: departamento, valor: valor})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteEnvio = async(req, res) => {
    const { cedula} = req.params //Desesctructurar
    let mensaje = ''
    try {
        const envio = await Envio.findOneAndDelete({cedula: cedula})
        mensaje = 'Eliminación exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}


module.exports = {
    getEnvio,
    postEnvio,
    putEnvio,
    deleteEnvio
}

const {Schema, model } = require('mongoose')


const EnvioSchema = ({

    cedula: {
        type: String,
        required: [true, 'La cedula es requerido']
    },

    nombre:{
        type: String,
        required:[true, 'El nombre de usuario es requirido']
    },

    apellido:{
        type: String,
        required:[true, 'El apellido es requirido']
    },

    email:{
        type: String,
        required:[true, 'El correo es requirido']
    },

    telefono:{
        type: Number,
        required:[true, 'El telefono es requirido']
    },

    direccion:{
        type: String,
        required:[true, 'La direccion es requirido']
    },

    ciudad:{
        type: String,
        required:[true, 'La ciudad es requirido']
    },

    postal:{
        type: String,
        required:[true, 'El codigo postal es requirido']
    },

    pais:{
        type: String,
        required:[true, 'El pais es requirido']
    },

    departamento:{
        type: String,
        required:[true, 'El departamento es requirido']
    },
})


module.exports = model('Envio', EnvioSchema)
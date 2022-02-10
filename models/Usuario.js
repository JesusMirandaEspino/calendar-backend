const { Schema, model } = require( 'mongoose' );

const UsuarioSchema = Schema({

    mane: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

});


module.exports = model( 'Usuario', UsuarioSchema );
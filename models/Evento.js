const { Schema, model } = require( 'mongoose' );

const EventoSchema = Schema({

    title: {
        type: String,
        require: true
    },

    start: {
        type: String,
        require: true,
    },

    end: {
        type: String,
        require: true
    },

    user: {
        type: Schema.Types.ObjectId,
       // require: true
        ref: 'Usuario'
    },


});


module.exports = model( 'Evento', EventoSchema );
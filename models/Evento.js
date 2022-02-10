const { Schema, model } = require( 'mongoose' );

const EventoSchema = Schema({

    title: {
        type: String,
        required: true
    },

    notes: {
        type: String,
    },

    start: {
        type: String,
        required: true,
    },

    end: {
        type: String,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
});


EventoSchema.method( 'toJSON', function(){
    const { __v, _id, ...object } =  this.ObjectId();
    object.id = _id;
    return object;
});


module.exports = model( 'Evento', EventoSchema );
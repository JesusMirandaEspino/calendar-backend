const { response } = require('express');
const Evento = require('../models/Evento');

const getEvento = async ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    });
}


const crearEvento = async ( req, res = response ) => {

    const evento = new Evento( req.body );
    
    try{

        evento.user = req.uid;
        const eventoGuardado = evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        });


    }catch(error){

        console.log( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}


const actualizarEvento = async ( req, res = response ) => {

    res.json({
    //123456
    ok: true,
    msg: 'actualizarEvento'
    });
}


const eliminarEvento = async ( req, res = response ) => {

    res.json({
    //123456
    ok: true,
    msg: 'eliminarEvento'
});
}



module.exports = {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}








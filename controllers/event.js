const { response } = require('express');


const getEvento = async ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'getEventos'
    });
}


const crearEvento = async ( req, res = response ) => {

        res.json({
        ok: true,
        msg: 'crearEvento'
    });
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








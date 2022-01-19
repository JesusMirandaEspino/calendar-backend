const express = require('express');

const res = express.response;
    
const crearUsuario = ( req, res ) => {

        res.json({
            ok: true,
            msg: 'registro',
            use: req.body
        });
    }


const loginUsuario = ( req, res ) => {
        res.json({
            ok: true,
            msg: 'login'
        });
    }

const revalidarUsuario = ( req, res ) => {
        res.json({
            ok: true,
            msg: 'renew'
        });
    }





module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario
}    
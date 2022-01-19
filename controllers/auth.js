const express = require('express');

const res = express.response;
    
const crearUsuario = ( req, res ) => {

    const { name, email, password } = req.body;

        if( name.length < 5 ){
            return res.status(400).json({
                ok: false,
                msg: 'El nombre debe de ser mayor a 5 letras'
            });
        }

        res.json({
            ok: true,
            msg: 'registro',
            name,
            email,
            password
        });
    }


const loginUsuario = ( req, res ) => {

    const { email, password } = req.body;

        res.json({
            ok: true,
            msg: 'login',
            email,
            password
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
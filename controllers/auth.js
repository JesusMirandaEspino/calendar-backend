const express = require('express');
const { validationResult } = require('express-validator');

const res = express.response;
    
const crearUsuario = ( req, res ) => {

    const { name, email, password } = req.body;

        res.status(201).json({
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
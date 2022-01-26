const express = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

const res = express.response;
    
const crearUsuario = async( req, res ) => {

    // code const { name, email, password } = req.body;

    try{
        const usuario = new Usuario( req.body );

        await usuario.save();

            res.status(201).json({
                ok: true,
                msg: 'registro',

            });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
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
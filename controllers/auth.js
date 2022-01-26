const express = require('express');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

const res = express.response;
    
const crearUsuario = async( req, res ) => {

    const {  email, password } = req.body;

    try{

        let usuario = await Usuario.findOne( { email} );

        if( usuario ){
            return res.status(400).json({
                        ok: false,
                        msg: 'Ya existe un usario registrado con este correo'
                    });
        }

        usuario = new Usuario( req.body );

        // enctriptar contraseña
        const salt = bcrypt.genSaltSync();

        usuario.password = bcrypt.hashSync( password, salt );

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
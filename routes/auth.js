const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth'); 


    router.post( 
        '/new', 
        [ // middlewares
            check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
            check( 'email', 'El email es obligatorio' ).isEmail(),
            check( 'password', 'El password debe de ser de almenos 6 caracteres' ).isLength({ min: 6 }),
            validarCampos
        ], 
        crearUsuario );


    router.post( 
        '/', 
        [ // middlewares
            check( 'email', 'El email es obligatorio' ).isEmail(),
            check( 'password', 'El password debe de ser de almenos 6 caracteres' ).isLength({ min: 6 }),
            validarCampos
        ], 
        loginUsuario );

    router.get( '/renew', revalidarUsuario );


    module.exports = router;
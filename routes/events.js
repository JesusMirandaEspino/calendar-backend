
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt'); 
const { check   } = require( 'express-validator' );
const { validarCampos } = require( '../middlewares/validar-campos' );
const { getEvento, crearEvento, actualizarEvento,  eliminarEvento } = require('../controllers/event');
const { isDate } = require('../helpers/isDate');


const router = Router();

router.use( validarJWT );


router.get('/', getEvento );


router.post('/events',  
[
    check( 'titulo', 'El titulo es obligatorio' ).not().isEmpty(),
    check( 'start', 'La fecha de inicio es obligatorio' ).custom( isDate ),
    check( 'end', 'La fecha final es obligatorio' ).custom( isDate ),
    validarCampos
], crearEvento );


router.put('/:id', actualizarEvento );


router.delete('/:id', eliminarEvento );


module.exports = router;
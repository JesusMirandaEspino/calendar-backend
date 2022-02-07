
const { Router } = require('express');
const { validarJWT } = require('/middlewares/validar-jwt'); 


const router = Router();



router.get('/', validarJWT, getEventos );


router.post('/', validarJWT, crearEvento );


router.put('/:id', validarJWT, actualizarEvento );


router.delete('/:id', validarJWT, eliminarEvento );


module.exports = router;
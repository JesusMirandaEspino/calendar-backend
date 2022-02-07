
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt'); 
const { getEvento, crearEvento, actualizarEvento,  eliminarEvento } = require('../controllers/event');


const router = Router();

router.use( validarJWT );


router.get('/', getEvento );


router.post('/', crearEvento );


router.put('/:id', actualizarEvento );


router.delete('/:id', eliminarEvento );


module.exports = router;
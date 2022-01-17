const express = require('express');
require( 'dotenv' ).config();

// Crear el servidor
const app = express();

// Directori Publico

app.use( express.static('public') );


// Rutas
app.use(  'api/auth', require('./routes/auth') );



// Escuchar las peticiones
app.listen( process.env.PORT,  () => {

    console.log( `Servidor corriendo en puerto: ${ process.env.PORT }` );

});

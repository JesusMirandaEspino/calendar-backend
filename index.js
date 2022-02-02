const express = require('express');
const { dbConnection } = require('./database/config');
require( 'dotenv' ).config();

const cors = require('cors')

// Crear el servidor
const app = express();

// Directori Publico
app.use( express.static('public') );


// Conexion a base de datos
dbConnection();

// cors
app.use( cors() );

// Lectura y parse del Body
app.use( express.json() );


// Rutas
app.use(  '/api/auth', require('./routes/auth') );



// Escuchar las peticiones
app.listen( process.env.PORT,  () => {

    console.log( `Servidor corriendo en puerto: ${ process.env.PORT }` );

});

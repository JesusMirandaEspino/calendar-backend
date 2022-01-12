const express = require('express');
require( 'dotenv' ).config();

// Crear el servidor
const app = express();

// Directori Publico

app.use( express.static('public') );

// Rutas

  //  codigo app.get( '/', ( req, res ) => {
  //  codigo    console.log('Se require el /');
  //  codigo     res.json({
  //          ok: true
  //      });
  //  });


// Escuchar las peticiones
app.listen( process.env.PORT,  () => {

    console.log( `Servidor corriendo en puerto: ${ process.env.PORT }` );

});

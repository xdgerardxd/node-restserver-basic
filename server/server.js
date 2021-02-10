// Modulos principales express
require("./config/config");                 // Primer archivo con las configuraciones globales
const express = require('express')          // Libreria para el servidor
const app = express()
const bodyParser = require("body-parser");  // Procesar payloads en peticiones HTTP

// Middleware - parse application/x-www-form-urlencoded
// Permite procesar todo el payload o body de las peticiones
app.use(bodyParser.urlencoded({ extended: false }))
 
// Middleware - parse application/json
app.use(bodyParser.json())

// Ruta GET
app.get('/usuario', function (req, res) {
  res.json('Obtener Usuario')
});

// Ruta POST
app.post('/usuario', function (req, res) {
    let body = req.body; // Recibo toda la informacion o data enviada en la peticion
    
    if (body.nombre === undefined){
        res.status(400).json({// Respondo un codigo de respuesta con un objeto con la descripcion del error 
            ok: false,
            mensaje: "Debe indicar el nombre de usuario"
        }) 
    }else{
        res.json({ // envio el body en la variable persona
            persona: body
        });
    }

});

// Ruta PUT
app.put('/usuario:id', function (req, res) {
    let id = req.params.id; // ID recibido en el cuerpo de la url /usuario:id
    res.json({ // Respondo un mensaje json que contiene un objeto con el valor del id
        id
    });  
});

// Ruta DELETE
app.delete('/usuario', function (req, res) {
    res.json('Eliminar Usuario')
});


// Funcion listen
app.listen(process.env.PORT, () =>{
    console.log("Servidor arriba en el puerto:", process.env.PORT);
});
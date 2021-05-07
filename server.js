// Cargar la libreria de express
const express = require('express');
const path = require('path')
const homeController = require('./controllers/home.controller');
// Creo una aplicacion de express y 
//la asigna a la constante app
const app = express();

// Agregar configuraciones

// soporte a JSON en el body de la peticion
app.use(express.json());
// usar la carpeta "public" como carpeta de  estaticos
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');


// como responder a determinados "VERBOS-PATHS"


// En el PATH '/' por el VERBO 'GET'
// envia una RESPUESTA 'hola mundo'
app.get('/', homeController.index);

app.get('/hola', homeController.hola);

app.post('/hola', function(req, res){
  console.log(req.body);
  res.status(204).send('');
});

app.post('/login', function(req, res){
  const {user, password} = req.body;
  //logica de inicio de sesion
  // . . .

  //hacer una redireccion al pagina home
  res.status(204).send('');
});
//CREAR UN SERVIDOR WEB QUE ESCUCHE 
// PETICIONES EN EL PUERO 80
app.listen(80, function(){
  console.log('se inicio el servidor por le puerto 80');
});
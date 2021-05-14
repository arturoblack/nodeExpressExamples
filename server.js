// Cargar la libreria de express
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const homeController = require('./controllers/home.controller');
const usuarioController = require('./controllers/usuario.controller');
const tareaController = require('./controllers/tarea.controller');
// Creo una aplicacion de express y 
//la asigna a la constante app
const app = express();

// Agregar configuraciones

// soporte a JSON en el body de la peticion
app.use(express.json());
// usar la carpeta "public" como carpeta de  estaticos
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
// Add DB configuration
const mongoDB = 'mongodb://127.0.0.1/loquesea';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

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

app.get('/usuarios/:id',usuarioController.get);
app.get('/usuarios',usuarioController.list);
app.post('/usuarios',usuarioController.create);
app.delete('/usuarios/:id',usuarioController.remove);
app.put('/usuarios/:id',usuarioController.update);

app.get('/tareas',tareaController.list);
app.get('/tareas/:id',tareaController.get);
app.post('/tareas',tareaController.create);
app.put('/tareas/:id',tareaController.update);
app.delete('/tareas/:id',tareaController.remove);
//CREAR UN SERVIDOR WEB QUE ESCUCHE 
// PETICIONES EN EL PUERO 80
app.listen(80, function(){
  console.log('se inicio el servidor por le puerto 80');
});
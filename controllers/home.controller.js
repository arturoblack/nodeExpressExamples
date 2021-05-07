exports.index = function(req, res) {
  const params = {
    titulo: 'Pagina principal',
    mensaje: 'Pagina en ExpressJS'
  };
  res.render('pagina.pug', params);
}

exports.hola = function(req, res) {
  const params = {
    titulo: 'Pagina de Saludo',
    mensaje: 'Hola mundo desde nodejs con expressjs'
  };
  res.render('pagina.pug', params);
}
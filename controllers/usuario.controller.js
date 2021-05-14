const db = require('../models');

exports.list = async function(req, res) {
  try {
    const usuarios = await db.Usuario.findAll();
    res.status(200).json(usuarios);
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'problema con la bd'});
  }
}

exports.get = async function(req, res) {
  try {
    const usuario = await db.Usuario.findByPk(req.params.id);
    if (usuario) res.status(200).json(usuario);
    else res.status(404).json({error: 'usuario no encontrado'});
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'problema con la bd'});
  }
}

exports.create = async function(req, res) {
  try {
    const usuario = await db.Usuario.create(req.body);
    res.status(200).json(usuario);
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'problema al crear usuario', errors: err.errors});
  }

}

exports.update = async function(req, res) {
  try {
    const usuario = await db.Usuario.findByPk(req.params.id);
    if (usuario){
      await usuario.update(req.body);
      res.status(200).json(usuario);
    }
    else res.status(404).json({error: 'usuario no encontrado'});
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'problema con la bd'});
  }
}

exports.remove = async function(req, res) {
  try {
    await db.Usuario.destroy({
      where: {id: req.params.id}
    });
    res.status(204).send();
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'problema al crear usuario', errors: err.errors});
  }
}
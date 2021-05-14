const TareaModel = require('../mongomodels/tarea');

exports.list = async function(req, res) {
  try {
    const tareas = await TareaModel.find();
    res.status(200).json(tareas);
  } catch(err){
    res.status(500).json(err);
  }
}
exports.get = async function(req, res) {
  try {
    const tarea = await TareaModel.findById(req.params.id);
    if (tarea) res.status(200).json(tarea);
    else res.status(404).json({error: 'tarea no encotrada'});
  } catch(err){
    res.status(500).json(err);
  }
}
exports.create = async function(req, res) {
  try {
    const tarea = TareaModel(req.body);
    await tarea.save();
    res.status(200).json(tarea);
  } catch(err){
    res.status(500).json(err);
  }
}
exports.update = async function(req, res) {
  try {
    await TareaModel.findByIdAndUpdate(
      req.params.id, req.body).exec();
    res.status(204).send();
  } catch(err){
    res.status(500).json(err);
  }
}

exports.remove = async function(req, res) {
  try {
    await TareaModel.findByIdAndRemove(
      req.params.id).exec();
    res.status(204).send();
  } catch(err){
    res.status(500).json(err);
  }
}
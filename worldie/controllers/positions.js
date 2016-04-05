var Position = require('../models/position');

function positionsIndex(req, res) {
  Position.find(req.query, function(err, positions) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(positions);
  });
}

function positionsShow(req, res) {
  Position.findById(req.params.id, function(err, position) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(position);
  });
}

function positionsUpdate(req, res) {
  Position.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, position) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(position);
  });
}

function positionsDelete(req, res) {
  Position.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json({ message: err });
    return res.status(204).send();
  });
}

module.exports = {
  index: positionsIndex,
  show: positionsShow,
  update: positionsUpdate,
  delete: positionsDelete
};
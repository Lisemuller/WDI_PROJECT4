var Score = require('../models/Score');

function ScoresIndex(req, res) {
  Score.find(req.query, null, { sort: '-score' }).populate('user').limit(10).exec(function(err, scores) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(scores);
  });
}

function ScoresCreate(req, res){
  console.log(req.body);
  Score.create(req.body, function(err, score) {
    console.log(score);
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(score);
  });
}

function ScoresUpdate(req, res){
  Score.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, score) {
    if(err) return res.status(500).json({ message: err });
    return res.status(200).json(score);
  });
}

module.exports = {
  index: ScoresIndex,
  update: ScoresUpdate,
  create: ScoresCreate
};
'use strict';

exports.find = (req, res) => {
  res.locals.db.find({ }, { }, (err, result) => {
    if (err) return res.status(err.status || 500).json(err);
    return res.status(200).json(result);
  });
};

exports.show = (req, res) => {
  res.locals.db.findById(req.params.id, (err, result) => {
    if (err) return res.status(err.status || 500).json(err);
    return res.status(200).json(result);
  });
};

exports.create = (req, res) => {
  res.locals.db.insert(req.body, (err, result) => {
    if (err) return res.status(err.status || 500).json(err);
    return res.status(201).json(result);
  });
};

exports.update = (req, res) => {
  res.locals.db.findAndModify({ _id: req.params.id }, { $set: req.body }, { multi: false }, (err, result) => {
    if (err) return res.status(err.status || 500).json(err);
    res.locals.db.findById(req.params.id, (err, doc) => {
      return res.status(202).json(doc);
    })
  });
};

exports.destroy = (req, res) => {
  res.locals.db.findById(req.params.id, (err, doc) => {
    if (err) return res.status(err.status || 404).json(err);
    res.locals.db.remove({ _id: doc._id }, (err) => {
      if (err) return res.status(err.status || 500).json(err);
      return res.send(204);
    });
  });
};
"use strict";

var express = require('express');
var router = express.Router();

var db = require('../config/db');

router.get('/', function(req, res, next) {
  db.query('SELECT * FROM cards', function(err, card) {
    if (err) {
      res.status(400).send(err)
      return;
    }

    res.send(card);
  });
});

router.post('/', function(req, res) {
  db.query('INSERT INTO cards SET ?', req.body, function(err, result) {
    if (err) {
      res.status(400).send(err);
      return
    }
    res.send(result);
  });
});

module.exports = router;

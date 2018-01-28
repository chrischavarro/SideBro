const express = require('express');
const tagController = express.Router();
const Tag = require('../models/Tag');

tagController.get('/api/tags', (req, res) => {
  Tag.find()
    .exec((err, tags) => {
      res.send(tags)
      console.log('TAGS', tags)
    });
});

module.exports = tagController;

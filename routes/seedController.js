const express = require('express');
const seedController = express.Router();
const Tag = require('../models/Tag');

seedController.get('/seed/tags', (req, res) => {
  const tags = [
    { name: 'Fitness' },
    { name: 'Sports' },
    { name: 'Literature' },
    { name: 'Gaming' },
    { name: 'Hunting' },
    { name: 'Comedy' },
    { name: 'Business' }
  ]

  for (tag of tags) {
    const newTag = new Tag(tag);
    newTag.save()
  }
  res.send('Seeded tags!')
})

module.exports = seedController;

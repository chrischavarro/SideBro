const express = require('express');
const profileController = express.Router();

profileController.post('/api/profile/artists', (req, res) => {
  console.log(req.body)
})

module.exports = profileController;

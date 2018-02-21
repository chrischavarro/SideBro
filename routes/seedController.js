const express = require('express');
const seedController = express.Router();
const Tag = require('../models/Tag');
const User = require('../models/User');

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

seedController.get('/seed/friends', (req, res) => {
  const users = [
    {
      "requests": [],
      "name": "Clay",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Ringo",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Godard",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Patrick",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Gabriel",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Daniel",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Matthew",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Kelsey",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Darnell",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
    {
      "requests": [],
      "name": "Barry",
      "bio": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing",
      "artists": ["5a8753252eac0c34f82fd3fd", "5a8753252eac0c34f82fd3fe", "5a875b402eac0c34f82fd400",
      "5a875b402eac0c34f82fd3ff", "5a876120a6a13c3b80751a3a", "5a876120a6a13c3b80751a3b",
      "5a88d7fa92ae8f7e69f5c77e", "5a88d7fa92ae8f7e69f5c77f", "5a88d7fa92ae8f7e69f5c780", "5a88d7fa92ae8f7e69f5c781"],
    },
  ]

  for (user of users) {
    const newUser = new User(user);
    newUser.save()
  }
  res.send('Seeded users!')
})

module.exports = seedController;

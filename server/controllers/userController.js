
const express = require('express');
const bodyParser = require('body-parser');

const userModel = require('../models/userModel');

async function get(req, res) {
  const users = await userModel.find({})
  if (!users) {
    res.status(404).send("not found")
  }
  res.json(users)
}

async function getById(req, res) {
  if (!req.params.id) {
    res.status(404).send("not found")
    return false
  }
  const user = await userModel.findById(req.params.id)
  if ( !user ){
    res.status(404).send("not found")
    return false
  }

  res.json(user)

}

async function add(req, res) {
  if (!req.body.fullName || !req.body.username || !req.body.age || !req.body.iconSource) {
    res.status(404).send("not found")
    return false
  }
  const user = new userModel({
    fullName: req.body.fullName,
    username: req.body.username,
    age: req.body.age,
    iconSource: req.body.iconSource

  })
  const result = await user.save()
  if (!result) {
    res.status(404).json("could not save it")
  }
  res.json(result)
}

async function deleteById (req, res)  {
  if (!req.body.id) {
    res.status(404).send("not found")
    return false
  }
  const result = await userModel.findByIdAndDelete(req.body.id)
  if (!result) {
    res.status(404).json("could not delete it")
  }
  res.json(result)
}

module.exports = {
  get,
  getById,
  add,
  deleteById
}
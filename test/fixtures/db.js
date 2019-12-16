const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

const userOneId = mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: 'Bobby',
  email: 'bobby@example.com',
  password: '1234567890',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId.toString() }, process.env.JWT_SECRET)
    }
  ]
};

const userTwoId = mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: 'Static',
  email: 'static@example.com',
  password: '1234567890',
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId.toString() }, process.env.JWT_SECRET)
    }
  ]
};

const taskOne = {
  _id: mongoose.Types.ObjectId(),
  description: 'First Task',
  completed: false,
  owner: userOne._id
};

const taskTwo = {
  _id: mongoose.Types.ObjectId(),
  description: 'Second Task',
  completed: true,
  owner: userOne._id
};

const taskThree = {
  _id: mongoose.Types.ObjectId(),
  description: 'Three Task',
  completed: true,
  owner: userTwo._id
};

const setupDatabse = async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabse
};

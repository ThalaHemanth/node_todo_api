const  { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { Users } = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

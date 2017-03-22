const  { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { Users } = require('./../server/models/user');

// var id = '58d17b2652e81e1c2c259248@@';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//finds everything based on condition
// Todo.find( {
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// //based on condition it finds first one
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

//finds something by its Id

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Todo Doesnt Exist');
//   }
//   console.log('Todo by id', todo);
// }).catch((err) => {
//   console.log(err);
// })
var id = '58d27d1f2ee77f48dc74566b';
Users.findById(id).then((user) => {
  console.log(JSON.stringify(user,undefined,2));
}).catch((err) => {
  console.log(err);
});

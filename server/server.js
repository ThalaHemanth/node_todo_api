var express = require('express');
var bodyParser = require('body-parser');
const  { ObjectID } = require('mongodb');

var {mongoose} = require('./db/mongoose');
var { Todo } = require('./models/Todo');
var { user } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })
});

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,
    })
  },(err) => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send("<h1> Invalid Id </h1>");
  }
  Todo.findById(id).then((todos) => {
    if(todos) {
      res.send(todos);
    } else {
      res.status(400).send();
    }
  },(err) => {
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});

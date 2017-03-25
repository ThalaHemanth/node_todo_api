const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const  { ObjectID } = require('mongodb');

var {mongoose} = require('./db/mongoose');
var { Todo } = require('./models/Todo');
var { Users } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

const port = process.env.PORT || 3000;
var app = express();



app.use(bodyParser.json());

app.get('/',(req,res) => {
  res.send("<h1> Node API created By Hemanth! </h1>")
});

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

app.delete('/todos/:id', (req,res) => {
  var id  = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send("<h1> Invalid Id </h1>");
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(todo) {
      res.send(todo);
    } else {
      res.status(400).send();
    }
  },(err) => {
    res.status(400).send();
  })
});

app.patch('/todos/:id',(req,res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send("<h1> Invalid Id </h1>");
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body,completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body},{new: true}).then((todo) => {
    res.send(todo);
  }).catch((err) => {
    res.status(400).send();
  })
});

app.post('/users',(req,res) => {
  var body = _.pick(req.body,['email','password']);
  var user = new Users(body);

  user.save().then(() => {
      return user.generateAuthToken();
  }).then((token) => {
      res.header('x-auth',token).send(user);
  }).catch((err) => {
    res.status(400).send(err);
  });
});



app.get('/users/me',authenticate,(req,res) => {
    res.send(req.user)
});

app.listen(port, function() {
  console.log('App is running on ' + port);
});

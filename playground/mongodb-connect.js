const {MongoClient, ObjectID} = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Connection to Database Failed!!');
  }
  console.log('Connected to database');

  // db.collection('Todos').insertOne({
  //   text: 'Katamarayudu',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Root',
    age: 1234,
    location: 'kernel'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert into USERS', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Connection to Database Failed!!');
  }
  console.log('Connected to database');
  // db.collection('Todos').find({
  //   _id:new ObjectID('58d0fd5ca75ea70bf80b7e3f')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch data', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${cound}`);
  // },(err) => {
  //   console.log('Unable to fetch data', err);
  // });
  db.collection('Users').find({location: 'kernel'}).toArray().then((data) => {
    console.log(JSON.stringify(data, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data ', err);
  });
  // db.close();
});

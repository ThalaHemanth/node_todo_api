const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Connection to Database Failed!!');
  }
  console.log('Connected to database');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58d1350d251e0c3073338269')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d0fec229b31b2cd07a71ca')
  },{
    $set: {
      name: '#-@Hemanth'
    },
    $inc: {
      age: -234
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});

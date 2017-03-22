const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Connection to Database Failed!!');
  }
  console.log('Connected to database');
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Run'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Run'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'Run'}).then((result)=>{
    console.log(result);
  })

  // db.close();
});

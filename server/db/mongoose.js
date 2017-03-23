require('dotenv').config();
var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// const username = process.env.MONGO_USERNAME;
// const password = process.env.MONGO_PASSWORD;
// var MongoDBUrl = encodeURIComponent(`mongodb://${username}:${password}@ds159988.mlab.com:59988/hemanthmongo`);

var mongoDB  = 'mongodb://hemanthjs:mongoHemanth123@ds159988.mlab.com:59988/hemanthmongo';
mongoose.connect(MongoDBUrl || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}

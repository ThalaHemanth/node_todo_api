require('dotenv').config();
var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// const username = process.env.MONGO_USERNAME;
// const password = process.env.MONGO_PASSWORD;

var mongoDB  = 'mongodb://'+process.env.MONGO_USERNAME+':'+process.env.MONGO_PASSWORD +'@ds159988.mlab.com:59988/hemanthmongo';
mongoose.connect(mongoDB || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}

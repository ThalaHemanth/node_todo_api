var mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

var mongoDB  = `mongodb://${username}:${password}@ds159988.mlab.com:59988/hemanthmongo`;
mongoose.connect(mongoDB || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}

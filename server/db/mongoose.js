var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoDB  = 'mongodb://hemanthjs:mongoHemanth123!@#@ds159988.mlab.com:59988/hemanthmongo';
mongoose.connect(mongoDB || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}

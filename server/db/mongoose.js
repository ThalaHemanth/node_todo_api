var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<hemanthjs>:<mongoHemanth123!@#>@ds159988.mlab.com:59988/hemanthmongo' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}

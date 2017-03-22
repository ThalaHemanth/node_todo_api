var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  }
});

module.exports = { Users }

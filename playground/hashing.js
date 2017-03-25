const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '1231abc';

// bcrypt.genSalt(10,(err,salt) => {
//   bcrypt.hash(password,salt,(err,hash) => {
//       console.log(hash);
//   });
// });

var hashed = '$2a$10$ur9eO3Rn6xw7.czM5QGT4eOyOWOj.9YrmdhByub.r8UpFsxf9i0Ny';

bcrypt.compare(password, hashed, (err,res) => {
  if(res) {
    console.log(res);
  } else if(err) {
    console.log(err);
  }

});

// var data = {
//   id: 10
// }

// var token = jwt.sign(data,'123abc');
//
// console.log(token)
//
// var verified = jwt.verify(token,'123abc');
//
// console.log(verified);

// var message = 'I am The Bat';
//
// var hash  = SHA256(message).toString();
//
// console.log(`Message ${message}`);
// console.log(`Hashed Message ${hash}`);
//
// var data = {
//   id: 3
// };
//
// var token = {
//   date,
//   hash: SHA256(JSON.stringify(data)) + 'thalada'+.toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data));

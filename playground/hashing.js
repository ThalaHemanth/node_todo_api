const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
}

var token = jwt.sign(data,'123abc');

console.log(token)

var verified = jwt.verify(token,'123abc');

console.log(verified);

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

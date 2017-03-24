const _ = require('lodash');

const obj = {
  name: 'Thalaiva',
  job: 'Saliva',
  place: 'Geniva',
  weight: '100'
}

// const myObj = new obj();
//
// console.log(myObj);

const pickObj = _.pick(obj,['weight','job']);

console.log(JSON.stringify(pickObj,undefined,2));

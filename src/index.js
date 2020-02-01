let myModule = require('./script');

let newModule = new myModule();

module.goodbye();

console.log(newModule.hello());
console.log(newModule.goodbye());

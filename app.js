const logger = require('./logger');
const greet = require('./greeter');

// console.log(module);

logger.logMsg(`hey guy!`);
greet("Stam");
logger.add(3, 1);

console.log(greet);
console.log(logger);

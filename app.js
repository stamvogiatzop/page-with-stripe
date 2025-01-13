// console.log(module);

// PRACTICING with created greeter module

const greet = require('./greeter');

console.log(greet);
greet('Stam');


// PRACTICING with path module

const path = require('path');

let pathObj = path.parse(__filename);

console.log(pathObj);

// PRACTICING with os module

const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let userInfo = os.userInfo();


console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(os.networkInterfaces());
console.log(`This PC runs on ${os.type()}`);
console.log(typeof(userInfo));


// PRACTICING with filesystem module
const fs = require('fs');

// synchronous method
// let filesSynch = fs.readdirSync('./');

// console.log(filesSynch);
// console.log(typeof(filesSynch));


// same asynchronous method

fs.readdir('./', function (err, files) {
  if (err) console.log('ERROR', err);
  else console.log('RESULT', files);
});




// SOS PRACTICING with events module connected with logger.js
const EventEmitter = require('events')
console.log(typeof(EventEmitter));

// access Logger class created in logger.js file
const Logger = require('./logger');

// create an instance of a Logger
const logger = new Logger();


// Register a listener with even arguments and an arrow function!!!
// more often used instead of .addListener

logger.on('messageLogged', (arg) => {
  console.log('Listener called!', arg);
})

// use the "log" method
logger.log('message');


// access constant variable from logger when available, but generally not practiced
// console.log(`motherfuckin\' "${logger.url}"`);


// PRACTICING with http module
const http = require('http');

// server inherits from net.Server which -> is an EventEmitter!
// So it has all the functionalities of an EventEmitter
// for example server.addListener(), server.on() or server.emit() etc...

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// the event name is "connection" - found in Documentation
server.on('connection', (socket) => {
  console.log('New connection...');

});

// Give it a port
server.listen(3000);

console.log('Listening on port 3000...');

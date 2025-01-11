const EventEmitter = require('events')
console.log(typeof(EventEmitter));

// with the keyword "extends" the new class Logger inherits all of
// EventEmitter base class functionality and characteristics
class Logger extends EventEmitter {

  // we lose the function word when we attach it within a class.
  // The function becomes a method!!!
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    // by using "this", instead of creating an instance of a new EventEmitter (emitter)
    this.emit('messageLogged', { id: 1, url: 'http://...' })
  }
}



// exporting the function within an object, making it available
module.exports = Logger;

// you can also rename it by:
// module.exports.banana = logMsg;


//export constant variable so that it is used from app.js
// const url = 'http://mylogger.io/log'
// module.exports.url = url;

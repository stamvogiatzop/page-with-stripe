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

// PRACTICING with http module
// const http = require('http');

// server inherits from net.Server which -> is an EventEmitter!
// So it has all the functionalities of an EventEmitter
// for example server.addListener(), server.on() or server.emit() etc...

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello World');
//     res.end();
//   }

//   if (req.url === '/api/courses') {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// // the event name is "connection" - found in Documentation
// server.on('connection', (socket) => {
//   console.log('New connection...');
// });

// // Give it a port
// server.listen(3000);

// console.log('Listening on port 3000...');


const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // in this way I can serve the html file or throw errors
        const filePath = path.join(__dirname, './index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('My bad...HTML not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url === '/styles.css') {
        // I do the same to serve the CSS file
        const cssPath = path.join(__dirname, 'styles.css');
        fs.readFile(cssPath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('CSS File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }
        });
    } else if (req.url.startsWith('/assets/')) {
          // ... and the same for the picture???
          const imagePath = path.join(__dirname, req.url);
          fs.readFile(imagePath, (err, content) => {
              if (err) {
                  res.writeHead(404, { 'Content-Type': 'text/plain' });
                  res.end('Image Not Found');
              } else {
                  res.writeHead(200, { 'Content-Type': 'image/jpg' }); // I have to choose the right type, in this case it is jpg
                  res.end(content);
              }
          });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 mate, sorry...');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

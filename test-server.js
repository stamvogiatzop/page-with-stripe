import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
});

server.listen(8000, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
});

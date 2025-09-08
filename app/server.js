import http from 'http';
const server = http.createServer((_, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('Hello Security Demo!\n');
});
server.listen(3000);
console.log('Demo app listening on :3000');

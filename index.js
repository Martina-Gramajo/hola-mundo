const http = require('http');

const hostname ='0.0.0.0';
const port = 8086;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
	console.log(`El servidor esta corriendo en http://${hostname}:${port}/`);
});

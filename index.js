const http = require('https');

const hostname ='192.168.0.125';
const port = 8089;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
	console.log(`El servidor esta corriendo en http://${hostname}:${port}/`);
});

const http = require('http');

const options = {
    hostname: '0.0.0.0', // Cambia a '0.0.0.0' si es necesario
    port: 8086,
    path: '/',
    method: 'GET'
};

const req = http.request(options, (res) => {
    console.log(`Estado de la respuesta: ${res.statusCode}`);

    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`Cuerpo de la respuesta: ${chunk}`);
        if (chunk === 'Hola Mundo') {
            console.log('La prueba fue exitosa.');
        } else {
            console.log('La prueba falló.');
        }
    });
});

req.on('error', (e) => {
    console.error(`Hubo un problema con la solicitud: ${e.message}`);
});

req.end();

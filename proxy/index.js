'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3100, host: 'localhost' });

server.start((err) => {
    if(err) {
        throw err;
    }

    console.log( 'Server running at: ' + server.info.uri );
});
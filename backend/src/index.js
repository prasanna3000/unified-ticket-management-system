var express = require('express');
var http = require('http');
const PORT = require('../config/constants').PORT;

const app = express();
const server = http.createServer();

app.set('port', PORT);
server.on('request', app);

server.listen(PORT, () => {
    console.log(`App started running on PORT: ${PORT}`);
});


var express = require('express');
var http = require('http');
const PORT = require('./config/constants').PORT;
const {
    attachMiddlewares,
    attacheRoutes,
 } = require('./middlewares/index');

require('./utils/database/setupMongoose');

const app = express();
const server = http.createServer();

app.set('port', PORT);
server.on('request', app);

server.listen(PORT, () => {
    console.log(`App started running on PORT: ${PORT}`);
});

attachMiddlewares(app);
attacheRoutes(app);

app.get('/', (req, res) => {
    try {
        res.send('Welcome to Unified Ticket Management System');
    } catch (error) {
        console.log('App crashed', error);
        res.send('Error Occurred');
    }
});

app.get('/*', (req, res) => {
    try {
        res.send('Route not found!');
    } catch (error) {
        console.log('Received a request for non-existent route');
    }
})
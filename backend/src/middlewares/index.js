var bodyParser = require('body-parser');
var cors = require('cors');
var ALLOWED_URLS_TO_RECEIVE_REQUESTS = require('../config/constants').ALLOWED_URLS_TO_RECEIVE_REQUESTS;
var ticketsRouter = require('../controllers/v1/tickets/index');
const ticketValidations = require('../controllers/v1/tickets/validations');
const checkValidations = require('../utils/checkValidations');

const corsOptions = {
    origin: ALLOWED_URLS_TO_RECEIVE_REQUESTS,
    optionsSuccessStatus: 200
}

const attachMiddlewares = (app) => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.options('*', cors(corsOptions));
};

const attacheRoutes = (app) => {
    app.post('/api/v1/ticket/save', ticketValidations.validateSaveTicketRequest, checkValidations, ticketsRouter.saveTicket);
    app.get('/api/v1/tickets/fetch', ticketValidations.validateGetTickets, checkValidations, ticketsRouter.getTickets);
    app.put('/api/v1/ticket/edit', ticketValidations.validateUpdateTicketRequest, checkValidations, ticketsRouter.updateTicket);
}

module.exports = {
    attachMiddlewares,
    attacheRoutes,
}
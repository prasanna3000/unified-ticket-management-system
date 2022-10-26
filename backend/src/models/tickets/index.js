const mongoose = require('mongoose');
const schema = require('./schema');

const Ticket = mongoose.model('Ticket', schema);

module.exports = Ticket;
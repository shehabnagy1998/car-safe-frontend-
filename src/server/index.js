const express = require('express'),
    { PORT } = require('../constants/CONSTANTS'),
    app = express(),
    http = require('http').Server(app),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    io = module.exports.io = require('socket.io')(http),
    socketManger = require('./sockets/socketManger');

app.use(bodyParser.json(), cors());
io.on('connection', socketManger);

http.listen(PORT, _ => {
    console.log(`listen on port ${PORT}`)
});
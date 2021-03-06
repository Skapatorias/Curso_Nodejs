const express = require('express');
const app = express();
const server = require('http').Server(app)
const bodyParser = require('body-parser');
const socket = require ('./socket');
const db = require('./db');
const router = require('./network/routes');


db('mongodb+srv://db_user:db_user@cluster0.qc4gv.mongodb.net/project_node?retryWrites=true&w=majority');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicación está escuchando en http://localhost:3000');
});

const express = require('express');
const app = express();
const msg = require('./components/messenger/router');
const users = require('./components/users/router');
const chat = require('./components/chat/router');
const socket = require('./socket');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// template enginer
app.set('views', './views');
app.set('view engine', 'pug');
app.set('view options', {
     layout: true
});

//routes
app.use('/user', users );
app.use('/msg', msg);
app.use('/chat', chat)
app.use('/app', express.static(path.join(__dirname, 'public')))

 const server = app.listen(3000, () => {
  console.log('Server iniciado');
});

// coneccion con el socket 
socket.connection(server)
// const a = socket.socket 
// a.io.on('connection', socket => {
 

// });
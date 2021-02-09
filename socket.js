const SocketIO = require('socket.io');
const socket = {}

function connection(server){
     socket.io =  SocketIO(server)
     socket.io.on('connection', (socket) => {
        console.log('new connection', socket.id)
    })
}



module.exports= {
    connection,
    socket
}
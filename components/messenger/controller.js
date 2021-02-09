const store = require('../../db/store');
const {socket} = require('../../socket');

function send(body){
    const msg = {
        chat: body.id,
        user: body.user,
        msg: body.message,
        date: Date()
    }
    socket.io.emit('message', msg);
    
     store.addMessage(msg) // el mensaje se añadira al chat que pertenece
     return msg
}

function info(id){
    //traemos el chat 
    let chat = store.getsChats(id)
    return chat
}


module.exports = {
    send, 
    info
}

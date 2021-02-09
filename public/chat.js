const socket = io()
let msg = document.getElementById('message');
let username = document.getElementById('user');
let btn = document.getElementById('Send');
let output = document.getElementById('output');
let actions = document.getElementById('actions')


msg.addEventListener('keypress', function(){
    socket.emit('chat:typing', username.value);
});

socket.on('message', function(data){
    actions.innerHTML =  ''
    output.innerHTML += `<p>
    <strong>${data.user}</strong>: ${data.msg}
    </p> `
});

socket.on('typing', function(data){
    actions.innerHTML = `<p><em>${data} is typing</em></p>`
});
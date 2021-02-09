 const store = require('../../db/store');
 const controllerChat= require('../chat/controller');

function add(data){
    const user = {
        id: Math.random(),
        name: data.nameUser}
    // cada vez que se agregue nuevo usuario se creara un chat
    controllerChat.add(user)
    return store.addUser(user)
      
};


module.exports = {
    add
}
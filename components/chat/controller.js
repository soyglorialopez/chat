const store = require('../../db/store');

function add(data){  
    return store.addChats(data)
};

function list(){
// si entramos en un contacto, entramos en un chat 
    return store.listChats()
}



module.exports = {
    add,
    list,
}
 const users = [{id:1, name: 'lia'}, {id:2, name: 'Maca'}]
 let chats = { 2: []}
 let msgs = []
module.exports = {
    addUser: (data) => {
        users.push(data)
    },
    getUser: (id) => {
        for(let i = 0; i < users.length; i++){
           if(users[i].id == id){
               return users[i].name
           }
        }
    },
    addMessage: (data) => {
    chats[data.chat].push(data)
      
    },
    getsChats: (id) => {
       let chat = chats[id]
        return chat
    },
    addChats: (data) => {
        //el id del usuario sera el id del chat
        chats[data.id] = []
 
    },
    listChats: () => {
        return users
    }
}
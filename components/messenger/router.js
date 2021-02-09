const express = require('express');
const router = express.Router()
const controller = require('./controller');
const {socket} = require('../../socket');


router.get('/:id', (req, res) => {
    //del socket que se ha conectado escuchamos su 'emit' y transmitimos el mensaje a todos
    //los clientes que nos escuchan excepto a mi 
     socket.io.on('connection', (socket) => {
          socket.on('chat:typing', data => {
              socket.broadcast.emit('typing', data)
         }) 
      })

  let result  = controller.info(req.params.id);
     if(!result){
          result = ''
     }
   
  return  res.render('index', {
       'result': result,
        'id': req.params.id
     });
});

router.post('/send', async (req, res)=> {
    await controller.send(req.body); 
     return res.redirect('http://localhost:3000/msg/'+ req.body.id)
    
})



module.exports = router


 
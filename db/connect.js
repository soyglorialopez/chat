const mongoose = require('mongoose');

async function Connect(){
  const url = 'url'
    await mongoose.connect(url , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true
   });
   console.log('DB Conectado con exito ')
}

module.exports = Connect


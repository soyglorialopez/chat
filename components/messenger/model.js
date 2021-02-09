const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Menssage = new Schema({
  chat: {
        ObjectId,
        ref: 'Chat'
    },
  userId: {
      ObjectId,
      ref: 'User'
  },
  msg: String,
  date: Date
});

const model = mongoose.model('Menssage', Menssage)

module.exports = model

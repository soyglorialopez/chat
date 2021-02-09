const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/create', (req, res) => {
    res.render('userCreate')
});


router.post('/add', async (req, res) => {
    try {
       await controller.add(req.body);
    } catch (error) {
        res.send({
            msg: error.menssage,
            status: error.status
        }) 
    }
    return res.redirect('/chat');
});



module.exports = router
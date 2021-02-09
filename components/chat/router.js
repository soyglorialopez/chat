const express = require('express');
const router = express.Router();
const controller = require('./controller');
const controllerUsers = require('../users/controller')

router.get('/', async (req, res) => {
    let results = {}
    results['users'] = await controller.list();
    res.render('chats', results)
}); 

module.exports = router

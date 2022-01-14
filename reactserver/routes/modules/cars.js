const express = require('express');
const router = express.Router()

router.get('/cars', function (req, res) {
	res.send({type: 'GET'})
})

router.post('/cars', function (req, res) {
	res.send({type: 'POST'})
})

router.put('/cars/:id', function (req, res) {
	res.send({type: 'PUT'})
})

router.delete('/cars/:id', function (req, res) {
	res.send({type: 'DELETE'})
})

module.exports = router;
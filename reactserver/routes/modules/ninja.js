const express = require('express');
const router = express.Router()
const Ninja = require("../../modules/ninja")
const auth = require('../auth');

router.get('/ninja', auth, function (req, res, next) {

	var nameRegex = new RegExp(req.query.name);

	Ninja.find({name: {$regex: nameRegex}}).then(function (ninjas) {
		res.send(ninjas)
	})

})

router.post('/ninja', auth, function (req, res, next) {
	Ninja.create(req.body).then(function (ninja) {
		res.send(ninja)
	}).catch(next);
})

router.put('/ninja/:id', auth, function (req, res, next) {
	Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function (ninja) {
		Ninja.findOne({_id: req.params.id}).then(function (ninja) {
			res.send(ninja)
		})
	})
})

router.delete('/ninja/:id', auth, function (req, res, next) {
	Ninja.findByIdAndRemove({_id: req.params.id}).then(function (ninja) {
		res.send(ninja)
	})
})

module.exports = router

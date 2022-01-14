const express = require('express')

const routes = require('./routes/index.js')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()

async function start(){
	await mongoose.connect(
		'mongodb+srv://sergey:1q2w3e4r@cluster0-bo8rc.mongodb.net/sergodb',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true}
		)

	app.use(express.static('public'));

	app.use(bodyParser.json())

	app.use(cors())

	routes.map( route => {
		app.use('/api', route)
	})

	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.json({'errors': {
				message: err.message,
				error: {}
			}});
	});

	app.listen(PORT, () => {
		console.log(`Server has been started on http://${require('my-local-ip')()}:${PORT}`)
		console.log(`Server has been started on http://localhost:${PORT}`)
	})
}

start();

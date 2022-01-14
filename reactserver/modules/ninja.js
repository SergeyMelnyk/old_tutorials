const mongoose = require("mongoose")
const Scheme = mongoose.Schema;

const NinjaScheme = new Scheme({
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	rank: {
		type: String,
	},
	avaliable: {
		type: Boolean,
		default: false
	}
})

const Ninja = mongoose.model('ninja', NinjaScheme)

module.exports = Ninja;
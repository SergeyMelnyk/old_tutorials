module.exports = (req, res, next) => {
	try {
		if(req.headers.authorization){
			const token = req.headers.authorization.split(' ')[1];
			if (token !== 'secret') {
				throw 'Invalid user autorization';
			} else {
				next();
			}
		}else{
			throw 'Invalid user autorization';
		}
	} catch(e) {
		console.log(e)
		res.status(401).json({
			error: e
		});
	}
};
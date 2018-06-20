var express = require('express');
var router = express.Router();

router.all('/prob.json', function (req, res, next) {
	
	a = parseInt(req.query.cf)
	s = parseInt(req.query.cp)

	p = (a / s);
	result = p * 100;

	res.json(result);


})

router.all('/ts.json', function (req, res, next) {

	a = parseInt(req.query.cf)
	s = parseInt(req.query.cp)

	p = (s / a) + (s / a);

	result = p * 100;

	res.json(result)
})

router.all('/tp.json', function (req, res, next) {

	a = parseInt(req.query.cf)
	s = parseInt(req.query.cp)

	p = (s / a) * (s / a);

	result = p * 100;

	res.json(result);
		
})


module.exports = router;
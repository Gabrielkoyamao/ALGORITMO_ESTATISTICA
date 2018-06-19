var express = require('express');
var router = express.Router();

router.all('/prob.json', function (req, res, next) {
	
	a = req.body.cf
	s = req.body.cp

	p = (a / s);
	result = p * 100;

	res.json(result);


})

router.all('/ts.json', function (req, res, next) {

	a = req.body.cf
	s = req.body.cp

	p = (s / a) + (s / a);

	result = p * 100;

	res.json(result)
})

router.all('/tp.json', function (req, res, next) {

	a = req.body.cf
	s = req.body.cp

	p = (s / a) * (s / a);

	result = p * 100;

	res.json(result);
		
})


module.exports = router;
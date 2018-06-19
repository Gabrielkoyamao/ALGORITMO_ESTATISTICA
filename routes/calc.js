var express = require('express');
var router = express.Router();

router.all('/prob.json', function (req, res, next) {
	

	// a = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero de casos favoraveis"));
	// s = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero de casos possíveis"));

	// p = (a / s);
	// result = p * 100;

	// JOptionPane.showMessageDialog(null, "A probabilidade é  de  "+p + " ou " + result +"%" );

	var result = 10;
	res.json(result);


})

router.all('/tSoma.json', function (req, res, next) {

	// a = Integer.parseInt(JOptionPane.showInputDialog("Digite o valor do espaço amostral"));
	// s = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero de evento"));

	// var a = req.query.a
	// var n = req.query.n
	// var e = 

	// numero de eventos

	// p = (s / a) + (s / a);

	// result = p * 100;
	// JOptionPane.showMessageDialog(null, "A probabilidade é  de  "+p + " ou " + result +"%" );
	var result = 10;
	res.json(result)
})

router.all('/tp.json', function (req, res, next) {

	// a = Integer.parseInt(JOptionPane.showInputDialog("Digite o valor do espaço amostral"));
	// s = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero de evento"));

	// numero de eventos

	// p = (s / a) * (s / a);

	// result = p * 100;
	a = req.query.cf
	b = req.query.cp
	
	var result = 10

	res.json(result);
	// JOptionPane.showMessageDialog(null, "A probabilidade é  de  "+p + " ou " + result +"%" );
		
})


module.exports = router;
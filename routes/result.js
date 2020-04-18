var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('result', {
        title: 'Votre site est prêt',
        name: 'result',
    })
});
router.post('/', function (req, res) {
    res.redirect('/');
});
module.exports = router;

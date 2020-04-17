var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('setting', {
        title: 'Configuration de votre site',
        name: 'setting',
    })
});
router.post('/', function (req, res) {
    res.redirect('setting');
});
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('themeSelect', {
        title: 'choix du theme',
        name: 'themeSelect',
        style: 'theme.css',
    })
});
router.post('/', function (req, res) {

    res.app.set('site-name', res.app.get('site-name'));
    res.app.set('site-template', req.body.select);

    res.redirect('setting');
    });
module.exports = router;

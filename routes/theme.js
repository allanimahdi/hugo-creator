var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('theme', {
        title: 'choix du theme',
        name: 'theme',
        style: 'theme.css'
    })
});
router.post('/', function (req, res) {
    console.log("clicked");
    res.redirect('setting');
    });
module.exports = router;

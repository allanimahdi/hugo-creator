var express = require('express');
var router = express.Router();
const { exec } = require("child_process");

router.get('/', function(req, res) {
    new Promise((resolve, reject) => {
        exec(`hugo server -D`, (error, stdout, stderr) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout? stdout : stderr);
        });
    });
 exec(`open http://localhost:1313`);

    res.render('result', {
        title: 'Votre site est prêt',
        name: 'result',
    })
});
router.post('/', function (req, res) {
    res.redirect('/');
});
module.exports = router;

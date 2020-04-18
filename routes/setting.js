var express = require('express');
var router = express.Router();
var themes = [
    {
        id: 0, url: "https://github.com/xaprb/story.git", name: "story"
    },
    {
        id: 1, url: "https://github.com/themefisher/liva-hugo.git", name: "liva"
    },
    {
        id: 2, url: "https://github.com/Tazeg/hugo-blog-jeffprod.git", name:"jeffprod"
    }
];

const { exec } = require("child_process");
router.get('/', function(req, res) {
    res.render('setting', {
        title: 'Configuration de votre site',
        name: 'setting',
    })
console.log(res.app.get('site-name'));
});
router.post('/', function (req, res) {
    var site = res.app.get('site-name');
    var siteTemplate = Number(res.app.get('site-template'));

    exec(`cd ~/Desktop && hugo new site ${site} && cd ~/Desktop/${site} && git init && 
    git submodule add ${themes[siteTemplate].url.toString()} themes/${themes[siteTemplate].name} &&
     echo 'theme = "${themes[siteTemplate].name}"' >> config.toml`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
   /* exec(`cd ~/Desktop/${site} && git init && git submodule add ${themes[siteTemplate].url.toString()} &&
     echo 'theme = "${themes[siteTemplate].name}"' >> config.toml`, (error, stdout2, stderr) => {
        console.log(`stdout: ${stdout2}`);
    })*/
    res.redirect('result');

});
module.exports = router;

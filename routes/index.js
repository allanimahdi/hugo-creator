var express = require('express');

var router = express.Router();
const { exec } = require("child_process");
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hugo-Builder' });
});
router.post('/', function (req, res) {
  //replace 'echo' below by this command to create a site :   cd ~/Desktop && hugo new site
  exec(`echo ${req.body.title}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
   /* exec(`cd ~/Desktop/${req.body.title} && git init && git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke && echo 'theme = "ananke"' >> config.toml
`, (error, stdout2, stderr) => {
      console.log(`stdout: ${stdout2}`);
    })
*/
  });
   res.app.set('site-name', req.body.title);
 // localStorage.setItem('data', req.body.title);
 // req.flash('data', req.body.title)

  res.redirect('themeSelect');
});

module.exports = router;

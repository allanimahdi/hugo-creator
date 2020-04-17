var express = require('express');

var router = express.Router();
const { exec } = require("child_process");

exec("ls -la", (error, stdout, stderr) => {
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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res) {
  console.log('this is it ='+ req.body.title);

  exec(`cd ~/Desktop && hugo new site ${req.body.title}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    exec(`cd ~/Desktop/${req.body.title} && git init && git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke && echo 'theme = "ananke"' >> config.toml
`, (error, stdout2, stderr) => {
      console.log(`stdout: ${stdout2}`);

    })

  });
  res.render('choosetheme', {
    title: 'Home',

  });
});

module.exports = router;

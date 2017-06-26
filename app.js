let express = require('express');
let app = express();
let exec = require('child_process').exec;

app.get('/',  (req, res) => {

  var phantomjs = require('phantomjs')
  var binPath = phantomjs.path

  exec("phantomjs render.js https://dmitrybaranovskiy.github.io/raphael/polar-clock.html "+Date.now()+".png", (error, stdout, stderr) => {

    console.log(stdout);
    console.log(stderr);

    if (error !== null) {
      console.log('exec error: ' + error);
    }
  })


  res.send('Hello World!');
});

app.listen(3000,  () => {
  console.log('Server');
});

exec("phantomjs render.js https://midia.f2fdigital.com.br/ public/"+Date.now()+".png 1024px*800px", (error, stdout, stderr) => {

  console.log(stdout);
  console.log(stderr);

  if (error !== null) {
    console.log('exec error: ' + error);
  }
})

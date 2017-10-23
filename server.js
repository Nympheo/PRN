const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(bodyParser.json());


/*   REQUEST HANDLERS   */
const userDataBase = {};

app.post('/login', (req, res) => {
  for(user in userDataBase){
    if(userDataBase[user].email == req.body.email){
      res.send(`welcome ${userDataBase[user].nickName}`);
    }
  }
  res.send('user don`t exist');
});

app.post('/registration', (req, res) => {
  if(userDataBase[req.body.nickName]){
    res.send('already exist');
  } else {
    userDataBase[req.body.nickName] = req.body;
    res.send('registration succesful');
  }
  console.log(userDataBase);
});


const server = app.listen(3341, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

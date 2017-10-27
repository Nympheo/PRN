const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
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
const userDataBase = {dima:{nickName: 'dima',
                            email: 'kumastakurt@mail.ru',
                            password: 'Polypass1',
                            repPassword: 'Polypass1',
                            polyclinic: '22'
                          },
                      anton:{
                            email: 'anton@mail.ru',
                            password: 'Anton1',
                            repPassword: 'Anton1',
                            polyclinic: '23'
                      },
                      vadim:{
                            email: 'vadim@mail.ru',
                            password: 'Vadim1',
                            repPassword: 'Vadim1',
                            polyclinic: '24'
                      },
                      valera:{
                            email: 'valera@mail.ru',
                            password: 'Valera1',
                            repPassword: 'Valera1',
                            polyclinic: '24'
                      },
};

app.post('/login', (req, res) => {
  res.send(checkUser(req.body));
  console.log(userDataBase);
});

app.post('/registration', (req, res) => {
  if(userDataBase[req.body.nickName]){
    res.send('Пользователь уже существует');
  } else {
    userDataBase[req.body.nickName] = req.body;
    res.send('Успешная регистрация');
  }
  console.log(userDataBase);
});

app.post('/recover', (req, res) => {
  let exist = false;
  for(user in userDataBase){
    if(userDataBase[user].email == req.body.recoverMail){
        exist = true;
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: false,
          port: 25,
          auth: {
            user: 'synthetic.probe@gmail.com',
            pass: 'GooglePass1234'
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        let HelperOptions = {
          from: 'сервис восстановления паролей',
          to: userDataBase[user].email,
          subject: 'восстановление пароля Полистат',
          text: `Ваш пароль: ${userDataBase[user].password}`
        }

        transporter.sendMail(HelperOptions, (error, info) => {
          if(error){
            res.send(error);
            return;
          }
          res.send('пароль выслан на ваш почтовый ящик');
        });
    }
  }
  if(!exist){
    res.send('пользователя с таким почтовым ящиком не существует');
  }
});




const server = app.listen(3003, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


function checkUser(body) {
  let answer = '';
  for(user in userDataBase){
    if(userDataBase[user].email == body.email){
      if(userDataBase[user].password != body.password){
        answer = 'Неверный пароль';
        break;
      }
      if(userDataBase[user].polyclinic != body.polyclinic){
        answer = 'Неверный номер поликлиники';
        break;
      }
      answer = `Добро пожаловать ${userDataBase[user].nickName}`
      break;
    }
    answer = 'Неверный адрес электронной почты';
  }
  return answer;
}

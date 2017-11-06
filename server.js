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



const userDataBase = [{
                            email: 'kumastakurt@mail.ru',
                            password: 'Polypass1',
                            name: 'Журавкин Дмитрий',
                            polyclinic: '22',
                            prof: 'хирург',
                            bio: ''
                      },
                      {
                            email: 'anton@mail.ru',
                            password: 'Anton1',
                            name: 'Иванов Антон',
                            polyclinic: '22',
                            prof: 'лор',
                            bio: ''
                      },
                      {
                            email: 'vadim@mail.ru',
                            password: 'Vadim1',
                            name: 'Орехов Вадим',
                            polyclinic: '24',
                            prof: '',
                            bio: ''
                      },
                      {
                            email: 'valera@mail.ru',
                            password: 'Valera1',
                            name: 'Кульбицкий Валера',
                            polyclinic: '24',
                            prof: '',
                            bio: ''
                      },
];//if you insert new properties in this database do it also in register component


/*   REQUEST HANDLERS   */

app.post('/login', (req, res) => {
  res.send(checkUser(req.body));
});

app.post('/registration', (req, res) => {
  let exist = false;
  let answer = '';
  userDataBase.forEach(el => {
    if(exist)return;
    if(el.email == req.body.email){
      exist = true;
    }
  });
  if(exist){
    answer = 'Этот почтовый ящик уже используется';
    exist = false;
  } else {
    userDataBase.push(req.body);
    answer = 'Успешная регистрация';
  }
  res.send(answer);
  console.log(userDataBase);
});

app.post('/users', (req, res) => {
  let poly = '';
  userDataBase.forEach(el => {
    if(poly) return;
    if(el.name == req.body.user) poly = el.polyclinic;
  });
  if(poly){
    let respBase = [];
    userDataBase.forEach(el => {
      if(el.polyclinic == poly) respBase.push({name:el.name, prof:el.prof});
    });
    let dataSend = JSON.stringify(respBase);
    res.send(dataSend);
  }else{
    res.send('this polyclinic have not active users');
  }
});

app.post('/recover', (req, res) => {
  let exist = false;
  userDataBase.forEach(el => {
    if(exist) return;
    if(el.email == req.body.recoverMail){
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
        to: el.email,
        subject: 'восстановление пароля Полистат',
        text: `Ваш пароль: ${el.password}`
      }

      transporter.sendMail(HelperOptions, (error, info) => {
        if(error){
          res.send(error);
          return;
        }
        res.send('пароль выслан на ваш почтовый ящик');
      });
    }
  });
  if(!exist){
    res.send('пользователя с таким почтовым ящиком не существует');
    exist = false;
  }
});



const server = app.listen(3006, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


function checkUser(body) {
  let answer = '';
  userDataBase.forEach(el => {
    if(answer)return;
    if(el.email == body.email){
      if(el.password != body.password){
        answer = 'Неверный пароль';
        return;
      }
      if(el.polyclinic != body.polyclinic){
        answer = 'Неверный номер поликлиники';
        return;
      }
      answer = `Добро пожаловать! ${el.name}`
      return;
    }
    answer = 'Неверный адрес электронной почты';
  });
  return answer;
}

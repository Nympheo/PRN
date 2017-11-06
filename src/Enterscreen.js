import React from 'react';
import Login from './Login';
import Register from './Register';
import Logedscreen from './Logedscreen';



class Enterscreen extends React.Component {
  constructor() {
    super();
    this.swapHandler = this.swapHandler.bind(this);
    this.forgetPass = this.forgetPass.bind(this);
    this.access = this.access.bind(this);
    this.state = {
      isLogged: false,
      approved: true,                           // entered for development
      user: 'Журавкин Дмитрий',                                 // dev
      userBase: [{name: "Журавкин Дмитрий", prof: "хирург", online: true}, // dev
                 {name: "Зорина Светлана", prof: "", online: true},
                 {name: "Юрко Зинаида", prof: "", online: true},
                 {name: "Иванов Антон", prof: "лор", online: false},
                 {name: "Орехов Вадим", prof: "", online: true},
                 {name: "Кульбицкий Валера", prof: "", online: false},
                 {name: "Амосов Андрей", prof: "", online: true},
                 {name: "Андреенко Виктор", prof: "", online: false},
                 {name: "Орехова Евгения", prof: "", online: true}]
    };
  }



  swapHandler() {
    this.setState(prevState => ({
      isLogged: !prevState.isLogged
    }));
  }

  access(u, b) {
    this.setState(prevState => ({
      approved: true,
      user: u,
      userBase: b
    }));
  }

  forgetPass() {
    let mail = prompt('введите адрес электронной почты');
    if(mail){
      let regmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!mail.match(regmail)){
        alert('проверьте правильность ввода');
      }else{
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/recover", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              alert(xhr.responseText);
            }
        };
      let dataSend = JSON.stringify({recoverMail: mail});
      xhr.send(dataSend);
    }
  }
  }

  render() {
    return (
       <div className='enterscreen-full'>
        {this.state.approved ? <Logedscreen user={this.state.user} users={this.state.userBase}/>
          : <div className='enterscreen-wrap'>
              {this.state.isLogged ? <Register/> : <Login access={this.access}/>}
              <hr/>
              {this.state.isLogged ?
                <span onClick={this.swapHandler}>уже зарегистрированы?</span>
                : <div className='footer-wrap'>
                    <span onClick={this.swapHandler}>регистрация</span>
                    <span onClick={this.forgetPass}>забыли пароль?</span>
                  </div> }
            </div>
        }
      </div>
    )
  }
}

export default Enterscreen;

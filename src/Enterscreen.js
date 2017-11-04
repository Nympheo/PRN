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
      approved: false,
      user: '',
      userBase: {}
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

  render() {
    return (
       <div className='enterscreen-full'>
        {this.state.approved ? <Logedscreen user={this.state.user}/>
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

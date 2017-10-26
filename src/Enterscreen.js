import React from 'react';
import Login from './Login';
import Register from './Register';
import Workspace from './Workspace';



class Enterscreen extends React.Component {
  constructor() {
    super();
    this.swapHandler = this.swapHandler.bind(this);
    this.forgetPass = this.forgetPass.bind(this);
    this.access = this.access.bind(this);
    this.state = {
      isLogged: false,
      approved: false
    };
  }

  swapHandler() {
    this.setState(prevState => ({
      isLogged: !prevState.isLogged
    }));
  }

  access() {
    this.setState(prevState => ({
      approved: true
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
       <div>
        {this.state.approved ? <Workspace/>
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

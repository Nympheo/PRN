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
    this.logout = this.logout.bind(this);
    this.state = {
      isLogged: false,
      approved: true,                           // entered for development
      user: 'Журавкин Дмитрий',                 // entered for development
      userBase: []
    };
  }

  // {name:'Журавкин Дмитрий', prof: 'хирург', online: true, ava: {}},
  //            {name:'Иванов Антон', prof:'', online:true, ava: {}},
  //            {name:'Зорина Светлана', prof:'', online:false, ava: {}},
  //            {name:'Юрко Зинаида', prof:'лор', online:true, ava: {}},
  //            {name:'Орехов Вадим', prof:'', online:false, ava: {}},
  //            {name:'Кульбицкий Валера', prof:'', online:false, ava: {}},
  //            {name:'Амосов Андрей', prof:'терапевт', online:true, ava: {}},
  //            {name:'Андреенко Виктор', prof:'', online:true, ava: {}},
  //            {name:'Орехова Евгения', prof:'', online:false, ava: {}}

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

  logout() {
    this.setState({approved: false});
  }

  render() {
    return (
       <div className='enterscreen-full'>
        {this.state.approved ? <Logedscreen user={this.state.user}
                                            users={this.state.userBase}
                                            out={this.logout}/>
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

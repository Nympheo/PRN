import React from 'react';


class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      nickName: ``,
      email: ``,
      password: ``,
      repPassword: ``,
      polyclinic: ``
    };
  }

  signIn() {
    if(checkForm(this.state.nickName,
                 this.state.email,
                 this.state.password,
                 this.state.repPassword,
                 this.state.polyclinic)){
                   let xhr = new XMLHttpRequest();
                   xhr.open("POST", "/registration", true);
                   xhr.setRequestHeader("Content-type", "application/json");
                   xhr.onreadystatechange = function () {
                       if (xhr.readyState === 4 && xhr.status === 200) {
                           let ev = new Event('click', {bubbles: true});
                           let el = document.getElementsByTagName('span')[0];
                           el.dispatchEvent(ev);
                       }
                   };
                   let dataSend = JSON.stringify(this.state);
                   xhr.send(dataSend);
                 }
  }

  render() {
    return (
      <div className='reg-form'>
      <h2>РЕГИСТРАЦИЯ</h2>
        <div className='reg-form-group'>
          <input
            className='form-control'
            type='text'
            placeholder='ваше имя'
            onChange={event => this.setState({nickName: event.target.value})}
          />
          <input
            className='form-control'
            type='email'
            placeholder='электронная почта'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className='form-control'
            type='password'
            placeholder='пароль'
            onChange={event => this.setState({password: event.target.value})}
          />
          <input
            className='form-control'
            type='password'
            placeholder='повторите пароль'
            onChange={event => this.setState({repPassword: event.target.value})}
          />
          <input
            className='form-control'
            type='text'
            placeholder='поликлиника'
            onChange={event => this.setState({polyclinic: event.target.value})}
          />
          <button
            className='btn log-button'
            type='button'
            onClick={() => this.signIn()}>
              ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </div>
      </div>
    )
  }
}

function checkForm(uname, email, pass, reppass, polyclinic) {
    var reguser = /^[A-Za-z]+$/;
    if(!uname.match(reguser))
      {
        alert('Имя должно содержать только буквы из алфавита');
        return false;
      }
    var regmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(regmail))
      {
        alert('Вы ввели не корректный адресс электронной почты');
        return false;
      }
    var regpass = /^(?=.*[A-Z])(?!.*[!@#$&*\^%\*\.])(?=.*[0-9])(?=.*[a-z]).{6,20}$/;
    if(!pass.match(regpass))
      {
        alert(`Пароль должен иметь длину минимум 6 символов,
              минимум один нижнего регистра, один верхнего
              , одну цифру, и без специальных символов:
              ~!@#$%^&*()_+`);
        return false;
      }
    if(pass!=reppass)
      {
        alert(`Пароли не совпадают`);
        return false;
      }
    var regpoly = /\d/g;
    if(!polyclinic.match(regpoly)){
      alert(`Номер поликлиники должен быть цифрой`);
      return false;
    }
    return true;
}

export default Register;

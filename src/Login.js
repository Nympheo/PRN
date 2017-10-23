import React from 'react';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      polyclinic: ''
    };
  }

  signUp() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    let dataSend = JSON.stringify(this.state);
    console.log(dataSend);
    xhr.send(dataSend);
  }

  render() {
    return (
      <div className='log-form'>
      <h2>ВХОД</h2>
        <div className='log-form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='электронная почта'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className='form-control'
            type='text'
            placeholder='пароль'
            onChange={event => this.setState({password: event.target.value})}
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
            onClick={() => this.signUp()}>
              ВОЙТИ
          </button>
        </div>
      </div>
    )
  }
}

export default Login;

import React from 'react';


class Login extends React.Component {
  constructor() {
    super();
    this.logAccess = this.logAccess.bind(this);
    this.state = {
      email: '',
      password: '',
      polyclinic: ''
    };
  }

  signUp(fun) {
    let that = this;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let resp = xhr.responseText;
            if(resp.includes('!')){
              let user = resp.slice(18);
              alert(resp);
              that.getPolyBase(user, fun);
            }else{
              alert(resp);
            }
        }
    };
    let dataSend = JSON.stringify(this.state);
    xhr.send(dataSend);
  }

  getPolyBase(u,f){
      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/users", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              let base = JSON.parse(xhr.responseText);
              f(u, base);
          }
      };
      let dataSend = JSON.stringify({user: u});
      xhr.send(dataSend);
  }

  logAccess(u, b) {
    this.props.access(u, b);
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
            type='password'
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
            onClick={() => this.signUp(this.logAccess)}>
              ВОЙТИ
          </button>
        </div>
      </div>
    )
  }
}

export default Login;

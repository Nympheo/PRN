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

  signIn () {
    console.log('signIn');
    console.log('this.state', this.state);

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
            placeholder='пароль'
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

export default Register;

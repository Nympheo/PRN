import React from 'react';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {

    };
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
          />
          <input
            className='form-control'
            type='text'
            placeholder='пароль'
          />
          <input
            className='form-control'
            type='text'
            placeholder='поликлиника'
          />
          <button
            className='btn log-button'
            type='button'>
              ВОЙТИ
          </button>
        </div>
      </div>
    )
  }
}

export default Login;

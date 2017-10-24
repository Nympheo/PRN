import React from 'react';
import Login from './Login';
import Register from './Register';



class Enterscreen extends React.Component {
  constructor() {
    super();
    this.swapHandler = this.swapHandler.bind(this);
    this.forgetPass = this.forgetPass.bind(this);
    this.state = {
      isLogged: false
    };
  }

  swapHandler() {
    this.setState(prevState => ({
      isLogged: !prevState.isLogged
    }));
  }

  forgetPass() {
    console.log('forget');
  }

  render() {
    return (
      <div className='enterscreen-wrap'>
        {this.state.isLogged ? <Register/> : <Login/>}
        <hr/>
        {this.state.isLogged ?
          <span onClick={this.swapHandler}>уже зарегистрированы?</span>
          : <div>
              <span onClick={this.swapHandler}>регистрация</span>
              <span onClick={this.forgetPass}>забыли пароль?</span>
            </div> }
      </div>
    )
  }
}

export default Enterscreen;

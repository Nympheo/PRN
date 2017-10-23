import React from 'react';
import Login from './Login';
import Register from './Register';



class Enterscreen extends React.Component {
  constructor() {
    super();
    this.swapHandler = this.swapHandler.bind(this);
    this.state = {
      isLogged: false
    };
  }

  swapHandler() {
    this.setState(prevState => ({
      isLogged: !prevState.isLogged
    }));
  }

  render() {
    return (
      <div className='enterscreen-wrap'>
        {this.state.isLogged ? <Register/> : <Login/>}
        <hr/>
        {this.state.isLogged ?
          <span onClick={this.swapHandler}>уже зарегистрированы?</span>
          : <span onClick={this.swapHandler}>регистрация</span>}
      </div>
    )
  }
}

export default Enterscreen;

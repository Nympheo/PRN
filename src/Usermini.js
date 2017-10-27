import React from 'react';


class Usermini extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    return (
       <div className='user-list' onClick={this.props.onClick}>
          <div className='ava-list'>
            <img src='/img/user.png'></img>
          </div>
          <div className='user-info'>
            <h4>Username</h4>
            <p>proffession</p>
            <span>status</span>
          </div>
        </div>
    )
  }
}

export default Usermini;

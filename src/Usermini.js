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
            <h4>{this.props.user}</h4>
            <p>{this.props.prof}</p>
            <span>status</span>
          </div>
        </div>
    )
  }
}

export default Usermini;

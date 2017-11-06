import React from 'react';


class Usermini extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click() {
    this.props.onClick(this.props.user);
  }

  render() {
    return (
       <div className='user-list' onClick={this.click}>
          <div className='ava-list'>
            <img src='/img/user.png'></img>
          </div>
          <div className='user-info'>
            <h4>{this.props.user}</h4>
            <p>{this.props.prof}</p>
            <img className='ava' src={this.props.online ? '/img/on.png' : '/img/off.png'}></img>
          </div>
        </div>
    )
  }
}

export default Usermini;

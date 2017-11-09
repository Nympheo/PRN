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
            <img src={this.props.ava ? this.props.ava : '/img/user.png'}/>
          </div>
          <div className='user-info'>
            <h5>{this.props.user}</h5>
            <p>{this.props.prof ? this.props.prof : 'не заполнено'}</p>
          </div>
          <img className='status' src={this.props.online ? '/img/on.png' : '/img/off.png'}/>
      </div>
    )
  }
}

export default Usermini;

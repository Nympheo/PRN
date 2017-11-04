import React from 'react';


class Usermini extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
    this.state = {
      user: '',
      prof: ''
    };
  }

  componentWillMount() {
    this.setState(prevState => ({
      user: this.props.user,
      prof: this.props.prof
    }));
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
            <span>status</span>
          </div>
        </div>
    )
  }
}

export default Usermini;

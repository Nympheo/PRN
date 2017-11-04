import React from 'react';


class Userroom extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      access: false
    };
  }

  componentWillMount() {
    this.setState(prevState => ({
      user: this.props.user,
      access: this.props.access
    }));
  }

  render() {
    return (
      <div>
        <div className='aside'>
          <img className='ava' src='/img/user.png'></img>
          <h4>{this.state.user}</h4>
          <h6>proffession</h6>
          <p>bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
          </p>
        </div>
        <div className='contribution'>

        </div>
        <div>
          {this.state.access ? <button>редактировать</button> : <button>выйти</button>}
        </div>
      </div>
    )
  }
}

export default Userroom;

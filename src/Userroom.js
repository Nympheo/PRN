import React from 'react';


class Userroom extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      host: false
    };
  }

  componentWillMount() {
    this.setState(prevState => ({
      user: this.props.user,
      host: this.props.host
    }));
  }

  render() {
    return (
      <div>
        <div className='aside'>
          <img className='ava' src='/img/user.png'></img>
          <h4>{this.state.user}</h4>
          <h5>proffession</h5>
          <p>bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
          </p>
        </div>
        <div className='contribution'>

        </div>
        <div>
          {this.state.host ? <button>редактировать</button> : <button>выйти</button>}
        </div>
      </div>
    )
  }
}

export default Userroom;

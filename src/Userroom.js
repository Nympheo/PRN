import React from 'react';


class Userroom extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    return (
      <div>
        <div className='aside'>
          <img className='ava' src='/img/user.png'></img>
          <h4>Username</h4>
          <h6>proffession</h6>
          <p>bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
              bio bio bio bio bio bio bio bio bio bio bio bio
          </p>
        </div>
        <div className='contribution'>

        </div>
      </div>
    )
  }
}

export default Userroom;

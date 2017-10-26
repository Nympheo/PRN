import React from 'react';
import Usermini from './Usermini';
import Workspace from './Workspace';



class Loggedscreen extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    return (
      <div className='logged-screen'>
        <div className='users-wrap'>
          <Usermini/>
          <Usermini/>
          <Usermini/>
          <Usermini/>
        </div>
        <div className='workspace-wrap'>
          <Workspace/>
        </div>
      </div>
    )
  }
}

export default Loggedscreen;

import React from 'react';
import Usermini from './Usermini';
import Userroom from './Userroom';
import Workspace from './Workspace';



class Loggedscreen extends React.Component {
  constructor() {
    super();
    this.enterRoom = this.enterRoom.bind(this);
    this.state = {
      entered: false
    };
  }

  enterRoom() {
    this.setState(prevState => ({
      entered: !prevState.entered
    }));
  }


  render() {
    return (
      <div className='logged-screen'>
        {this.state.entered ? <Userroom/>
        : <div className='work'>
            <div className='users-wrap'>
               <Usermini onClick={this.enterRoom}/>
               <Usermini onClick={this.enterRoom}/>
               <Usermini onClick={this.enterRoom}/>
               <Usermini onClick={this.enterRoom}/>
             </div>
             <div className='workspace-wrap'>
               <Workspace/>
             </div>
           </div>}
      </div>
    )
  }
}

export default Loggedscreen;

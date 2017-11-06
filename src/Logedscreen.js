import React from 'react';
import Usermini from './Usermini';
import Userroom from './Userroom';
import Workspace from './Workspace';



class Loggedscreen extends React.Component {
  constructor() {
    super();
    this.enterRoom = this.enterRoom.bind(this);
    this.state = {
      entered: false,
      polyUsers: {},
      polyUsersRender: [],
      userRoom: '',
      host: false
    };
  }

  componentWillMount() {
    let usersForRender = this.props.users.map((el) =>
                          <Usermini onClick = {this.enterRoom}
                                    user = {el.name}
                                    prof = {el.prof}
                                    key = {el.name}
                          />
    );
    this.setState(prevState => ({
      polyUsers: this.props.users,
      polyUsersRender: usersForRender
    }));
  }

  enterRoom(user) {
    if(user == this.props.user){
      this.setState(prevState => ({
        entered: !prevState.entered,
        userRoom: user,
        host: true
      }));
    }else {
      this.setState(prevState => ({
        entered: !prevState.entered,
        userRoom: user,
        host: false
      }));
    }
  }


  render() {
    return (
      <div className='logged-screen'>
        {this.state.entered ? <Userroom user={this.state.userRoom}
                                        host={this.state.host}
                              />
        : <div className='work'>
            <div className='users-wrap'>
              {this.state.polyUsersRender}
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

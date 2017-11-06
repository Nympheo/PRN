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
    window.addEventListener("beforeunload", function (e) {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/offline", true);
      xhr.setRequestHeader("Content-type", "application/json");
      let dataSend = JSON.stringify({name: this.props.user});
      xhr.send(dataSend);
    });
    let sortedUsers = this.props.users.sort(compare);
    let current;
    sortedUsers.map(e => {
      if(e.name == this.props.user)current = e;
    });
    sortedUsers = sortedUsers.filter(e => e.name != current.name);
    sortedUsers.unshift(current);
    let usersForRender = sortedUsers.map((el) =>
                          <Usermini onClick = {this.enterRoom}
                                    user = {el.name}
                                    prof = {el.prof}
                                    online = {el.online}
                                    key = {el.name}
                          />
    );
    this.setState(prevState => ({
      polyUsers: sortedUsers,
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

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

export default Loggedscreen;

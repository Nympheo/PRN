import React from 'react';
import Usermini from './Usermini';
import Userroom from './Userroom';
import Workspace from './Workspace';



class Loggedscreen extends React.Component {
  constructor() {
    super();
    this.enterRoom = this.enterRoom.bind(this);
    this.toMainScreen = this.toMainScreen.bind(this);
    this.state = {
      entered: false,
      polyUsers: {},
      polyUsersRender: [],
      userRoom: '',
      host: false,
      avaPath: ''
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
    //----------------------
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.open("POST", "/users", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let base = JSON.parse(xhr.responseText);
            let sortedUsers = base.sort(compare); //!!!!
            let current;
            sortedUsers.map(e => {
              if(e.name == that.props.user) current = e;
            });
            current.host = true;
            sortedUsers = sortedUsers.filter(e => e.name != current.name);
            sortedUsers.unshift(current);
            let usersForRender = sortedUsers.map(function(el, i) {
                return  (
                        <Usermini onClick = {that.enterRoom}
                                  user = {el.name}
                                  prof = {el.prof}
                                  online = {el.online}
                                  key = {el.name}
                                  ava = {el.ava}
                                  host = {el.host ? el.host : ''}
                        />
                      )
            });
            that.setState(prevState => ({
              polyUsers: sortedUsers,
              polyUsersRender: usersForRender
            }));
        }
    };
    let dataSend = JSON.stringify({user: this.props.user});
    xhr.send(dataSend);
  }

  enterRoom(user) {
    if(user == 'out'){
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/offline", true);
      xhr.setRequestHeader("Content-type", "application/json");
      let dataSend = JSON.stringify({name: this.props.user});
      xhr.send(dataSend);
      this.props.out();
    } else {
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
  }

  toMainScreen(out) {
    if(out)this.out();
    let xhr = new XMLHttpRequest();
    let that = this;
    xhr.open("POST", "/users", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let base = JSON.parse(xhr.responseText);
            let sortedUsers = base.sort(compare); //!!!!
            let current;
            sortedUsers.map(e => {
              if(e.name == that.props.user) current = e;
            });
            current.host = true;
            sortedUsers = sortedUsers.filter(e => e.name != current.name);
            sortedUsers.unshift(current);
            let usersForRender = sortedUsers.map((el, i) =>
                                  <Usermini onClick = {that.enterRoom}
                                            user = {el.name}
                                            prof = {el.prof}
                                            online = {el.online}
                                            key = {el.name}
                                            ava = {el.ava}
                                            host = {el.host ? el.host : ''}
                                  />
            );
            that.setState(prevState => ({
              polyUsers: sortedUsers,
              polyUsersRender: usersForRender,
              entered: false
            }));
        }
    };
    let dataSend = JSON.stringify({user: this.props.user});
    xhr.send(dataSend);
  }


  render() {
    return (
      <div className='logged-screen'>
        {this.state.entered ? <Userroom user={this.state.userRoom}
                                        host={this.state.host}
                                        back = {this.toMainScreen}
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

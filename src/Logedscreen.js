import React from 'react';
import Usermini from './Usermini';
import Userroom from './Userroom';
import Workspace from './Workspace';



class Loggedscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      entered: false,
      // polyUsers: {}
    };
  }

  // componentDidMount() {
  //   let that = this;
  //   let xhr = new XMLHttpRequest();
  //   xhr.open("POST", "/users", true);
  //   xhr.setRequestHeader("Content-type", "application/json");
  //   xhr.onreadystatechange = function () {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //           let resp = JSON.parse(xhr.responseText);
  //           that.setState({polyUsers: resp});
  //       }
  //   };
  //   let dataSend = JSON.stringify({user: this.props.user});
  //   xhr.send(dataSend);
  // }

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
               <Usermini onClick = {this.enterRoom}
                         user = {this.props.user}
                        //  prof = {this.state.polyUsers[this.props.user].prof}
                         />
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

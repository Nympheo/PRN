import React from 'react';


class Userroom extends React.Component {
  constructor() {
    super();
    this.back = this.back.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      user: '',
      host: false,
      prof: '',
      bio: ''
    };
  }

  componentWillMount() {
    let that = this;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/userroom", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let userData = JSON.parse(xhr.responseText);
            console.log(userData);
            that.setState(prevState => ({
              prof: userData[0].prof,
              bio: userData[0].bio
            }));
        }
    };
    let dataSend = JSON.stringify({user: that.props.user});
    xhr.send(dataSend);
    this.setState(prevState => ({
      user: this.props.user,
      host: this.props.host
    }));
  }

  back() {
    this.props.back();
  }

  edit() {
    console.log('edit');
  }

  render() {
    return (
      <div>
        <div className='user-data'>
          <button onClick={this.back}>
            <img src='/img/back.png'></img>
            на главную
          </button>
          <img className='ava' src='/img/user.png'></img>
          <h4>{this.state.user}</h4>
          <h5>{this.state.prof}</h5>
          <p>{this.state.bio ? this.state.bio : 'Биография'}</p>
          <div>
            {this.state.host ?
               <button onClick={this.edit}>
                  <img src='/img/edit.png'></img>
                  редактировать
               </button>
              : <span></span>}
          </div>
        </div>
        <div className='user-contribution'>

        </div>

     </div>
    )
  }
}

export default Userroom;

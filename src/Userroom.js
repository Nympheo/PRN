import React from 'react';


class Userroom extends React.Component {
  constructor() {
    super();
    this.back = this.back.bind(this);
    this.edit = this.edit.bind(this);
    this.imageLoader = this.imageLoader.bind(this);
    this.state = {
      user: '',
      host: false,
      prof: '',
      bio: '',
      editable: false
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

  edit(uspec, ubio) {
    if(uspec || ubio){

      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/addUserData", true);
      xhr.setRequestHeader("Content-type", "application/json");
      let dataSend = JSON.stringify({name: that.state.user,
                                     prof: uspec,
                                     bio: ubio});
      xhr.send(dataSend);
      this.setState({
        editable: !this.state.editable,
        prof: uspec || this.state.prof,
        bio: ubio || this.state.bio
      });
    } else {
      this.setState(prevState => ({
        editable: !prevState.editable
      }));
    }
  }

  imageLoader(imgFile) {
    let fr = new FileReader();
    fr.onload = function () {
      document.getElementsByClassName('ava')[0].src = fr.result;
    }
    fr.readAsDataURL(imgFile);


    let formData = new FormData();
    formData.append('username', this.state.user);
    formData.append('ava', imgFile);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/avaUpload", true);
    // xhr.setRequestHeader("Content-type", "multipart/form-data");
    xhr.send(formData);
  }

  render() {
    return (
      <div>
        <div className='user-data'>
          <button onClick={this.back}>
            <img src='/img/back.png'/>
            на главную
          </button>
          <label htmlFor="imageLoad">
            <img className='ava' src='/img/user.png' onClick={this.imageLoad}/>
          </label>
          <input id="imageLoad" type="file" name="uploads[]" accept="image/*"
          capture onChange={e => this.imageLoader(e.target.files[0])}/>
          <h4>{this.state.user}</h4>
          {this.state.editable ? <EditUser click={this.edit}
                                           prof={this.state.prof}
                                           bio={this.state.bio}
                                 />
                               : <UserData host={this.state.host}
                                           click={this.edit}
                                           prof={this.state.prof}
                                           bio={this.state.bio}
                                 />}
        </div>
        <div className='user-contribution'>

        </div>
     </div>
    )
  }
}

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.click();
  }

  render() {
    return (
      <div>
        <h5>{this.props.prof ? this.props.prof : '..специальность'}</h5>
        <p>{this.props.bio ? this.props.bio : '..биография'}</p>
        {this.props.host ? <button onClick={this.handleChange}>
                    <img src='/img/edit.png'/>
                    редактировать
                  </button>
                : <span></span>
        }
      </div>
    )
  }
}

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.click(uspec.value, ubio.value);
  }

  render() {
    return (
      <div>
        <input id='uspec' type='text' placeholder='специализация...'
        defaultValue={this.props.prof ? this.props.prof :'специальность...'}/>
        <textarea id='ubio' type='text' placeholder='биография...'
        defaultValue={this.props.bio ? this.props.bio :'биография...'}/>
        <button onClick={this.handleChange}>
           <img src='/img/done.png'/>
           готово
         </button>
      </div>
     )
  }
}

export default Userroom;

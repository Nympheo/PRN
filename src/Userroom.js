import React from 'react';
import Contribution from './Contribution';
import DataEntry from './DataEntry';


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
      ava: '',
      editable: false
    };
  }

  componentWillMount() {
    let that = this;
    let xhr2 = new XMLHttpRequest();
    xhr2.open("POST", "/userroom", true);
    xhr2.setRequestHeader("Content-type", "application/json");
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            let userData = JSON.parse(xhr2.responseText);
            let imgName;
            if(Object.keys(userData[0].avaImage).length > 0){
              imgName = userData[0].avaImage.path.slice(4);
            }
            that.setState(prevState => ({
              prof: userData[0].prof,
              bio: userData[0].bio,
              ava: imgName || ''
            }));
        }
    };
    let dataSend2 = JSON.stringify({user: that.props.user});
    xhr2.send(dataSend2);

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
    formData.append('ava', imgFile);
    formData.append('user', this.state.user);

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
          <label htmlFor={this.props.host ? "imageLoad" : ''}>
            <img className='ava'
                 src={this.state.ava ? this.state.ava : '/img/user.png'}/>
          </label>
          <input id="imageLoad" type="file" name="uploads[]" accept="image/*"
          capture onChange={(e) => this.imageLoader(e.target.files[0])}/>
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
        {this.props.host ? <DataEntry user={this.props.user}/>: <span></span>}
        </div>
        <div className='user-contribution'>
          <Contribution base={this.props.base}
                        user={this.state.user}/>
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
        <h5>{this.props.prof ? this.props.prof : 'должность'}</h5>
        <p>{this.props.bio ? this.props.bio : 'биография'}</p>
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
        <select id='uspec' defaultValue={this.props.prof ? this.props.prof :'должность..'}>
          <option value='должность..'>должность..</option>
          <option value='аллерголог'>аллерголог</option>
          <option value='гастроэнтеролог'>гастроэнтеролог</option>
          <option value='гематолог'>гематолог</option>
          <option value='гериатр'>гериатр</option>
          <option value='дерматолог'>дерматолог</option>
          <option value='иммунолог'>иммунолог</option>
          <option value='инфекционист'>инфекционист</option>
          <option value='кардиолог'>кардиолог</option>
          <option value='невролог'>невролог</option>
          <option value='нефролог'>нефролог</option>
          <option value='онколог'>онколог</option>
          <option value='оториноларинголог'>оториноларинголог</option>
          <option value='офтальмолог'>офтальмолог</option>
          <option value='проктолог'>проктолог</option>
          <option value='психотерапевт'>психотерапевт</option>
          <option value='пульмонолог'>пульмонолог</option>
          <option value='реабилитолог'>реабилитолог</option>
          <option value='ревматолог'>ревматолог</option>
          <option value='терапевт'>терапевт</option>
          <option value='травматолог'>травматолог</option>
          <option value='уролог'>уролог</option>
          <option value='физиотерапевт'>физиотерапевт</option>
          <option value='хирург'>хирург</option>
          <option value='эндокринолог'>эндокринолог</option>
          <option disabled>__________________</option>
          <option value='врач ЛФК'>врач ЛФК</option>
          <option value='врач МРТ'>врач МРТ</option>
          <option value='врач РДИ'>врач РДИ</option>
          <option value='врач РКТ'>врач РКТ</option>
          <option value='врач УЗИ'>врач УЗИ</option>
        </select>
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

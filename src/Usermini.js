import React from 'react';


class Usermini extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
    this.out = this.out.bind(this);
  }

  click() {
      this.props.onClick(this.props.user);
  }

  out() {
      this.props.onClick('out');
  }


  // /uploads/03UB-m1nN_c.jpg
  render() {

  let background = this.props.ava ? this.props.ava.replace(/\\/, "/") : '/img/user.png';
  console.log(background);

    return (
       <div className='user-list' onClick={this.props.host ? ()=>false : this.click}>
          <div className='ava-list'>
            <div className='mini-user-ava'
                 style={{backgroundImage: `url(${background})`}}>
            </div>

          </div>
          <div className='user-info'>
            <h5>{this.props.user}</h5>
            <p>{this.props.prof ? this.props.prof : 'не заполнено'}</p>
            {this.props.host ? <div className='mini-user-icons'>
                                  <span onClick={this.out}><img src='/img/logout.png' title="выход"/></span>
                                  <span onClick={this.click}><img src='/img/info.png' title="информация пользователя"/></span>
                                </div>
                             : <span></span>
            }
          </div>
          <img className='status' src={this.props.online ? '/img/on.png' : '/img/off.png'}/>
      </div>
    )
  }
}

export default Usermini;

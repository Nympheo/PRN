import React from 'react';
import Maingraph from './Maingraph';
import Detailedgraph from './Detailedgraph';



class Workspace extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    // console.log('workspace' + this.props.polyclinicNum);
    return (
      <div className='work-section'>
      <h2>Данные о работе врачей поликлиники 22</h2>
        <Maingraph base={this.props.base}/>
        <Detailedgraph base={this.props.base}/>
      </div>
    )
  }
}

export default Workspace;

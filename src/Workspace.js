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
    return (
      <div className='work-section'>
      <h2>Сведения о работе врачей поликлиники</h2>
        <Maingraph base={this.props.base}/>
        <Detailedgraph base={this.props.base}/>
      </div>
    )
  }
}

export default Workspace;

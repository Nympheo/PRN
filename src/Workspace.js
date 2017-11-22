import React from 'react';
import Maingraph from './Maingraph';
import Detailedgraph from './Detailedgraph';
import * as d3 from "d3";



class Workspace extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    return (
      <div className='work-section'>
      <h2>Посещаемость</h2>
        <Maingraph/>
        <Detailedgraph/>
      </div>
    )
  }
}

export default Workspace;

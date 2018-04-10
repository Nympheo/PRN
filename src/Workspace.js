import React from 'react';
import Maingraph from './Maingraph';
import Detailedgraph from './Detailedgraph';


class Workspace extends React.Component {
  constructor() {
    super();
    this.selectData = this.selectData.bind(this);
    this.state = {
        selectedDataDet: {},
        selectedDataProp: {},
    };
  }

  selectData(d){
    console.log('select data');
    // console.log(d.date instanceof Date);
    // console.log(this.props.base[0].work[0].date instanceof Date);
    // console.log(this.props.base[0].work[0].date == d.date);

    let that = this;
    //total count
    let baseDet = this.props.base.map(function(e,i){
      let count = 0;
      let name = that.props.base[i].name.substr(0,that.props.base[i]
                .name.indexOf(' ')+2)+`. (${that.props.base[i].prof})`;
        e.work.map(function(e2){
        if(e2.date == d.date) count = e2.data.count;
      });
      return {count: count, name: name}
    });

    //proportions counts
    const mw = [{count: 0, color: 'rgb(237, 207, 46)'},
              {count: 0, color: 'rgb(233, 50, 50)'}];
    const ac = [{count: 0, color: 'rgb(237, 207, 46)'},
              {count: 0, color: 'rgb(233, 50, 50)'}];
    const dn = [{count: 0, color: 'rgb(237, 207, 46)'},
              {count: 0, color: 'rgb(233, 50, 50)'}];
    const iv = [{count: 0, name: 'инвалидов'}, {count: 0, name: 'ветеранов'}];

    this.props.base.map(function(e){
      e.work.map(function(e2){
        if(e2.date == d.date){
          mw[0].count += e2.data.mens;
          mw[1].count += e2.data.womans;
          ac[0].count += e2.data.adults;
          ac[1].count += e2.data.children;
          dn[0].count += e2.data.disease;
          dn[1].count += e2.data.nodisease;
          iv[0].count += e2.data.invalids;
          iv[1].count += e2.data.veterans;
        }
      })
    });

    let baseProp = {mw: mw, ac: ac, dn: dn, iv:iv};

    this.setState((prevState, props) => {
       return {selectedDataDet: baseDet, selectedDataProp: baseProp};
    });
  }


  render() {
    console.log('workspace render');
    return (
      <div>
              <div className='work-section'>
              <h2>Данные о работе врачей поликлиники 22</h2>
                <Maingraph base={this.props.base} select={this.selectData}/>
              </div>
              <div className='work-section'>
              <h4 id='title2'>за месяц врачами</h4>
              <h4 id='title3'>из них</h4>
                <Detailedgraph base={this.props.base}
                               selectDet={this.state.selectedDataDet}
                               selectProp={this.state.selectedDataProp}/>
              </div>
      </div>
    )
  }
}

export default Workspace;

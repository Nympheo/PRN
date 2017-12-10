import React from 'react';
import * as d3 from "d3";



class Maingraph extends React.Component {
  constructor() {
    super();
    this.createAreaChart = this.createAreaChart.bind(this);
    this.state = {
      base: []
    };
  }

  componentDidMount() {
     // this.createAreaChart();

     // this.setState({base: this.props.base});
     console.log('mount');

  }

  componentDidUpdate() {
     console.log('update');

     let updatedBase = this.props.base[0].work;
     let that = this;

     updatedBase = updatedBase.map(function(el,i) {
       let sum = 0;
       sum = that.props.base.reduce(function(prev,cur){
         return prev + cur.work[i].data.count;
       }, 0);

       return {
         date: el.date,
         data: sum
       }
     })

     this.setState((prv,prp) => {base: updatedBase});
     this.createAreaChart();

  }

  createAreaChart() {
    d3.select('#main').append('rect').attr('width', 100).attr('height', 400);
     // const node = this.node;
     // const width = node.clientWidth;
     // const height = node.clientHeight;
     // const countMax = d3.max(this.props.base, e => d3.max(e.work, e => e.data.count));
     // const timeMax = d3.extent(this.props.base[0].work, e => e.date);
     //
     //
     // const yScale = d3.scaleLinear()
     //    .domain([0, countMax])
     //    .range([0, height]);
     // const xScale = d3.scaleTime()
     //    .domain([0, timeMax])
     //    .range([0, width]);
     //
     // const xAxis = d3.axisBottom(xScale),
     //       yAxis = d3.axisLeft(yScale);
     //
     // const area = d3.area()
     //    .curve(d3.curveMonotoneX)
     //    .x(function(d, i) { return xScale(d.work[i].date); })
     //    .y0(height)
     //    .y1(function(d, i) { return yScale(d.work); });
console.log('create chart');

//--------------------------------------
     //  select(node)
     //     .selectAll('rect')
     //     .data(this.props.data)
     //     .enter()
     //     .append('rect');
     //
     //  select(node)
     //     .selectAll('rect')
     //     .data(this.props.data)
     //     .exit()
     //     .remove();
     //
     //  select(node)
     //     .selectAll('rect')
     //     .data(this.props.data)
     //     .style('fill', '#fe9922')
     //     .attr('x', (d,i) => i * 25)
     //     .attr('y', d => this.props.size[1] - yScale(d))
     //     .attr('height', d => yScale(d))
     //     .attr('width', 25);
  }


  render() {
    // console.log(this.props.base);
    console.log('render');
    console.log(this.state);
    return (
      <div className='workspace'>
        <svg id='main' ref={node => this.node = node}></svg>
      </div>
    )
  }
}

export default Maingraph;

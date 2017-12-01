import React from 'react';
import * as d3 from "d3";



class Maingraph extends React.Component {
  constructor() {
    super();
    this.createAreaChart = this.createAreaChart.bind(this);
    this.state = {
    };
  }

  // componentDidMount() {
  //    this.createAreaChart();
  // }

  componentDidUpdate() {
     this.createAreaChart();
  }

  createAreaChart() {
     const node = this.node;
     const width = node.clientWidth;
     const height = node.clientHeight;
     const countMax = d3.max(this.props.base, e => d3.max(e.work, e => e.data.count));
     const timeMax = d3.extent(this.props.base[0].work, e => e.date);
     console.log(timeMax);

     const yScale = d3.scaleLinear()
        .domain([0, countMax])
        .range([0, height]);
     const xScale = d3.scaleTime()
        .domain([0, timeMax])
        .range([0, width]);

     const xAxis = d3.axisBottom(xScale),
           yAxis = d3.axisLeft(yScale);

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
    return (
      <div className='workspace'>
        <svg id='main' ref={node => this.node = node}></svg>
      </div>
    )
  }
}

export default Maingraph;

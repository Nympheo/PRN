import React from 'react';
import * as d3 from "d3";
import Proportions from './Proportions';


class Detailedgraph extends React.Component {
  constructor() {
    super();
    this.createBarChart = this.createBarChart.bind(this);
    this.drawAxes = this.drawAxes.bind(this);
    this.state = {
      base: [],
      axes: false,
      start: false,
      svg: {},
      xScale: {},
    };
  }

  // componentWillMount() {
  //    console.log('componentWillMount');
  // }

  // componentDidMount() {
  //    console.log('detailed graph component did mount');
  //    setTimeout(this.createBarChart(),2000);
  // }

  // componentDidUpdate() {
  //    console.log('componentDidUpdate');
  // }

  drawAxes(){
    this.state.axes = true;

    const margin = {top: 0, right: 15, bottom: 20, left: 160};
    const width = this.doctorgraph.clientWidth - margin.left - margin.right;
    const height = this.doctorgraph.clientHeight - margin.top - margin.bottom;

    this.svg = d3.select(this.doctorgraph).append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
     .append("g")
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
       .attr('id', 'detailed');

    // const countMax = d3.max(this.props.select, e => e.count);
    let doctors = this.props.selectDet.map(e => e.name);
    doctors = doctors.reverse();

    const yScale = d3.scaleBand()
       .domain([...doctors])
       .rangeRound([height, 0]);
    this.xScale = d3.scaleLinear()
       .domain([0, 170])
       .range([0, width]);

    const xAxis = d3.axisBottom(this.xScale),
          yAxis = d3.axisLeft(yScale);

     this.svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
           .attr("y", 0)
           .attr("x", 9)
           .attr("dy", ".35em")
           .attr("transform", "rotate(45)")
           .style("text-anchor", "start");

     this.svg.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis)
           .select('text')
           .attr("transform", "translate(0,0)");
  }

  createBarChart() {
     const t = d3.transition()
         .duration(500)
         .ease(d3.easeLinear);

     d3.selectAll('.detRect').transition(t).attr('width', 0);
     d3.selectAll('.detailedText').transition(t).attr('opacity', 0);
     d3.selectAll('.detailedText').remove();
     d3.selectAll('.detRect').remove();
     // d3.selectAll('.detRect').transition(t).remove();


      // const barWidth = (height / this.props.select.length);
      this.svg.selectAll('.rect')
         .data(this.props.selectDet)
         .enter()
         .append('g')
         .attr("transform", (d,i) => `translate(0,${i*6})`)
         .attr("class", "rect");

     this.svg.selectAll('.rect')
         .append('rect')
         .attr("class", "detRect")
         .style('fill', 'rgb(255, 90, 54)')
         .attr('x', 1)
         .attr('y', (d,i) => i * 27 + 5 )
         .attr('height', d => 20)
         .transition(t).delay(300)
         .attr('width', d => this.xScale(d.count));

     this.svg.selectAll('.rect')
         .append('text')
         .attr("dy", ".5em")
         .attr("y", (d,i) => i * 27 + 10 )
         .attr("text-anchor", "middle")
         .attr('font-size', '11')
         .attr('class', 'detailedText')
         .text(0)
         .transition(t).delay(300)
         .attr("x", d => this.xScale(d.count) + 10)
         .text(d => d.count);
  }

  render() {
    if(Object.keys(this.props.selectDet).length > 0 && !this.state.axes) this.drawAxes();
    if(Object.keys(this.props.selectDet).length > 0) this.createBarChart();
        // <div id='after'></div>
        // <button onClick={this.handleChange} title="скачать отчёт">
        //   <img src='/img/download.png'/>
        // </button>
    return (
      <div className='workspace'>
        <div id='doctorgraph' ref={node => this.doctorgraph = node}></div>
        <Proportions selectProp={this.props.selectProp}/>
        <div id='after'></div>
      </div>
    )
  }
}

export default Detailedgraph;

import React from 'react';
import * as d3 from "d3";


class Maingraph extends React.Component {
  constructor() {
    super();
    this.createAreaChart = this.createAreaChart.bind(this);
    this.prepareData = this.prepareData.bind(this);
    this.rectSelected = this.rectSelected.bind(this);
    this.state = {
      base: [],
      dataReady: false,
    };
  }

  // componentWillMount() {
  //    console.log('componentWillMount');
  // }
  //
  // componentDidMount() {
  //    console.log('componentDidMount');
  // }
  //
  // componentDidUpdate() {
  //    console.log('componentDidUpdate');
  // }

  prepareData(){
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
    });

   // this.setState((prevState, props) => {
   //    return {base: updatedBase, dataReady: true};
   // }); :(

   this.state.base = updatedBase;
   this.state.dataReady = true;

    setTimeout(() => this.createAreaChart(), 1000);
  }

  createAreaChart() {
     let that = this;

     const margin = {top: 10, right: 35, bottom: 45, left: 35};
     const width = this.node.clientWidth - margin.left - margin.right;
     const height = this.node.clientHeight - margin.top - margin.bottom;

     const svg = d3.select(this.node).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

     const countMax = d3.max(this.state.base, e => e.data);
     let timeMax = d3.extent(this.props.base[0].work, e => new Date(e.date));

     const yScale = d3.scaleLinear()
        .domain([0, countMax + 100])
        .range([height, 0]);
     const xScale = d3.scaleTime()
        // .domain([0, timeMax])
        .domain([new Date(2015,11,2), new Date(2017,11,2)])
        .range([0, width]);

     const xAxis = d3.axisBottom(xScale).ticks(24),
           yAxis = d3.axisLeft(yScale);

     const tip = d3.select("body").append("div")
                  .attr("class", "tooltip")
                  .style("opacity", 0);


      svg.append("g")
         .attr("class", "axis axis--x")
         .attr("transform", "translate(-15," + height + ")")
         .call(xAxis)
         .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(45)")
            .style("text-anchor", "start");

      svg.append("g")
         .attr("class", "axis axis--y")
         .call(yAxis)
            .select('text')
            .attr("transform", "translate(-9,0)");

      const barWidth = (width / this.state.base.length);
      svg.selectAll('rect')
         .data(this.state.base)
         .enter()
         .append('rect')
         .attr("transform", (d,i) => `translate(${i*barWidth+1},0)`)
           .on("mouseover", function(d) {
             d3.select(this)
                .transition()
                .duration(500)
                .attr('style', 'fill:red' );

                tip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tip.html(d.data)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
                    that.rectSelected(d);          //select data
                    })
            .on("mouseout", function(d) {
                tip.transition()
                    .duration(400)
                    .style("opacity", 0);
                d3.select(this)
                   .transition()
                   .duration(500)
                   .attr('style', 'fill:#fe9922' );
            });

      svg.selectAll('rect')
         .style('fill', '#fe9922')
         .attr('class', 'mainBar')
         .attr('x', 5)
         .attr('y', d =>  yScale(d.data))
         .attr('height', d => height - yScale(d.data))
         .attr('width', 25);
  }

  rectSelected(d){
    this.props.select(d);
  }


  render() {
    if(Object.keys(this.props.base).length > 0 && !this.state.dataReady) this.prepareData();

    return (
      <div className='workspace'>
        <div id='main' ref={node => this.node = node}></div>
        <h4>Количество принятых пациентов</h4>
      </div>
    )
  }
}

export default Maingraph;

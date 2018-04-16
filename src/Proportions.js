import React from 'react';
import * as d3 from "d3";


class Proportions extends React.Component {
  constructor() {
    super();
    this.createPieCharts = this.createPieCharts.bind(this);
    this.drawPie = this.drawPie.bind(this);
    this.drawBars = this.drawBars.bind(this);
    this.state = {

    };
  }

  createPieCharts(data){
    this.drawPie(data.mw, this.proportion1);
    this.drawPie(data.ac, this.proportion2);
    this.drawPie(data.dn, this.proportion3);
    this.drawBars(data.iv, this.proportion4);
  }

  drawPie(data, node){
    const t = d3.transition()
        .duration(500)
        .ease(d3.easeLinear);

    let remove = d3.selectAll('.propCircles').remove();

    let promise = new Promise((remove, reject) => {
        if(d3.selectAll('.propCircles'))remove();
    });

   promise
        .then(
          result => {
            const margin = {top: 0, right: 6, bottom: 6, left: 6},
                  width = node.clientWidth - margin.left - margin.right,
                  height = node.clientHeight - margin.top - margin.bottom;

            const svg = d3.select(node).append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .attr('class','propCircles')
                .append("g")
                  .attr("transform", `translate(
                        ${(width + margin.right + margin.left) / 2},
                        ${(height + margin.top + margin.bottom) / 2})`);

            const pieGen = d3.pie()
                         .value(d => d.count);
                         // .sort((a, b) => a.name.localeCompare(b.name));

            const arcData = pieGen(data);

            const arcGen = d3.arc()
                             .innerRadius((width / 2 - margin.right - margin.left) / 1.5)
                             .outerRadius(width / 2);

             svg.selectAll('path')
                .data(arcData)
                .enter()
                .append('path')
                .attr('d', arcGen)
                .transition(t)
                .attr('fill', d =>  d.data.color)
                .attr('stroke', 'rgba(250, 250, 250, 0)');

             svg.selectAll('text')
                 .data(arcData)
                 .enter()
                   .append('text')
                   .attr('class', 'propText')
                   .each(function(d) {
                     let centroid = arcGen.centroid(d);
                     d3.select(this)
                       .attr('x', centroid[0])
                       .attr('y', centroid[1])
                       .attr('dy', '0.33em')
                       .attr('font-size', '10px')
                       .attr('fill', 'black')
                       .attr('text-anchor', 'middle')
                       .text(d => d.data.count);
                   });
          },
          error => {
            alert("Rejected: " + error); // error - аргумент reject
          }
        );
  }

  drawBars(data, node){
    const t = d3.transition()
        .duration(500)
        .ease(d3.easeLinear);

    let remove = d3.selectAll('.propBars').remove();

    let promise = new Promise((remove, reject) => {
        if(d3.selectAll('.propBars'))remove();
    });

    promise
        .then(
          result => {
            const margin = {top: 6, right: 6, bottom: 6, left: 6},
                  width = node.clientWidth - margin.left - margin.right,
                  height = node.clientHeight - margin.top - margin.bottom;

            const svg = d3.select(node).append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .attr('class','propBars')
                .append("g")
                  .attr("transform", "translate(70," + margin.top + ")")

            const domain = data.map(e => e.name);

            const yScale = d3.scaleBand()
               .domain([...domain])
               .rangeRound([height, 0]);
            const xScale = d3.scaleLinear()
               .domain([0, 100])
               .range([0, width]);

            // const xAxis = d3.axisBottom(this.xScale);
            const yAxis = d3.axisLeft(yScale);

           svg.append("g")
                .attr("class", "axis axis--y")
                .call(yAxis)
                   .select('text')
                   .attr("transform", "translate(0,0)");

           svg.selectAll('.rect')
              .data(data)
              .enter()
              .append('g')
              .attr("transform", (d,i) => `translate(0,${i*6})`)
              .attr("class", "rect");

           svg.selectAll('.rect')
              .append('rect')
              // .attr("class", "detRect")
              .style('fill', 'rgb(237, 124, 68)')
              .attr('x', 1)
              .attr('y', (d,i) => i * 19 + 3   )
              .attr('height', d => 18)
              .transition(t).delay(300)
              .attr('width', d => xScale(d.count));

           svg.selectAll('.rect')
              .append('text')
              .attr("dy", ".5em")
              .attr("y", (d,i) => i * 19 + 7 )
              .attr("text-anchor", "middle")
              .attr('font-size', '11')
              // .attr('class', 'detailedText')
              .text(0)
              .transition(t).delay(300)
              .attr("x", d => xScale(d.count) + 10)
              .text(d => d.count);
          },
          error => {
            alert("Rejected: " + error); // error - аргумент reject
          }
        );
  }

  render() {
    if(Object.keys(this.props.selectProp).length > 0) this.createPieCharts(this.props.selectProp);

    return (
      <div className='proportiongraph'>
        <div className='proportions' ref={node => this.proportion1 = node}></div>
        <div className='spanWrap'>
          <div><div className='color1'></div><p>Мужчин</p></div>
          <div><div className='color2'></div><p>Женщин</p></div>
        </div>
        <div className='proportions' ref={node => this.proportion2 = node}></div>
        <div className='spanWrap'>
          <div><div className='color1'></div><p>Взрослых</p></div>
          <div><div className='color2'></div><p>Детей</p></div>
        </div>
        <div className='proportions' ref={node => this.proportion3 = node}></div>
        <div className='spanWrap'>
          <div><div className='color1'></div><p>По болезни</p></div>
          <div><div className='color2'></div><p>Осмотр</p></div>
        </div>
        <div className='proportionsBot' ref={node => this.proportion4 = node}></div>
      </div>
    )
  }
}

export default Proportions;

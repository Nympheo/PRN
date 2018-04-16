import React from 'react';
import * as d3 from "d3";


class Contribution extends React.Component {
  constructor() {
    super();
    this.prepareData = this.prepareData.bind(this);
    this.drawBars = this.drawBars.bind(this);
    this.prepareCirclesData = this.prepareCirclesData.bind(this);
    this.drawCircles = this.drawCircles.bind(this);
    this.drawBottomBars = this.drawBottomBars.bind(this);
    this.state = {
      drawn: false,
      base: [],
      fillColour: '#fe9922',
    };
  }



  prepareData(){
    this.state.base = this.props.base.filter(e => e.name == this.props.user)[0].work;

    let barsData = this.state.base.map(function(e){
      return {date: e.date, count: e.data.count}
    });
    setTimeout(() => this.drawBars(barsData, this.contrGraph), 1000);
    this.state.drawn = true;
  }




  drawBars(data, node){
    let that = this;

    const margin = {top: 10, right: 35, bottom: 45, left: 35};
    const width = node.clientWidth - margin.left - margin.right;
    const height = node.clientHeight - margin.top - margin.bottom;

    const svg = d3.select(node).append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
     .append("g")
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const countMax = d3.max(data, e => e.count);
    // let timeMax = d3.extent(this.props.base[0].work, e => new Date(e.date));
    // timeMax = timeMax.map(e => new Date(e));
   //  console.log(timeMax);
   // console.log(timeMax[0] instanceof Date);

    const yScale = d3.scaleLinear()
       .domain([0, countMax + 10])
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

     const barWidth = (width / data.length);
     svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr("transform", (d,i) => `translate(${i*barWidth+1},0)`)
        .style('fill', that.state.fillColour)
          .on("mouseover", function(d) {

               // d3.select(this).classed("my-selector", true);
               // that.setState({ fillColour: 'rgb(235, 18, 18)' });
               // console.log(that.state);

               d3.select(this)
                  .transition()
                  .duration(500)
                  .attr('style', 'fill:red' );

               tip.transition()
                   .duration(200)
                   .style("opacity", .9);
               tip.html(d.count)
                   .style("left", (d3.event.pageX) + "px")
                   .style("top", (d3.event.pageY - 28) + "px");
                   that.prepareCirclesData(d);          //select data
                   })
           .on("mouseout", function(d) {
               // d3.select(this).classed("my-selector", false);
               // that.setState({ fillColour: '#fe9922' });
               tip.transition()
                   .duration(400)
                   .style("opacity", 0);
               d3.select(this)
                  .transition()
                  .duration(500)
                  .attr('style', 'fill:#fe9922' );
           });

     svg.selectAll('rect')
        .style('fill', that.state.fillColour)
        .attr('class', 'mainBar')
        .attr('x', 5)
        .attr('y', d =>  yScale(d.count))
        .attr('height', d => height - yScale(d.count))
        .attr('width', 25);

  }






  prepareCirclesData(data){
    const mw = [{count: 0, color: 'rgb(237, 207, 46)'},
              {count: 0, color: 'rgb(233, 50, 50)'}];
    const ac = [{count: 0, color: 'rgb(237, 207, 46)'},
              {count: 0, color: 'rgb(233, 50, 50)'}];
    const dn = [{count: 0, color: 'rgb(237, 207, 46)'},
              {count: 0, color: 'rgb(233, 50, 50)'}];
    const iv = [{count: 0, name: 'ветеранов'}, {count: 0, name: 'инвалидов'}];

    this.state.base.map(function(e){
      if(e.date == data.date){
        mw[0].count += e.data.mens;
        mw[1].count += e.data.womans;
        ac[0].count += e.data.adults;
        ac[1].count += e.data.children;
        dn[0].count += e.data.disease;
        dn[1].count += e.data.nodisease;
        iv[0].count += e.data.invalids;
        iv[1].count += e.data.veterans;
      }
    });

    this.drawCircles(mw, this.proportion1);
    this.drawCircles(ac, this.proportion2);
    this.drawCircles(dn, this.proportion3);

    this.drawBottomBars(iv, this.proportion4);
  }






  drawCircles(data, node) {

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







  drawBottomBars(data, node){
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
               .domain([0, 70])
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
              .attr('y', (d,i) => i * 19 + 3 )
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
    if(Object.keys(this.props.base).length > 0 && !this.state.drawn) this.prepareData();
    return (
        <div>
          <div className='work-section'>
            <h2 className="mainTitle">Данные о работе врача {this.props.user}</h2>
            <div className='workspace'>
              <div id='contrGraph' ref={node => this.contrGraph = node}></div>
              <h4>Количество принятых пациентов</h4>
            </div>
          </div>
          <div className='work-section-room'>
            <h4 className='title2'>из них</h4>
            <div className='workspace'>
              <div className='proportiongraph2'>
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
            </div>
          </div>
        </div>
    )
  }
}

export default Contribution;

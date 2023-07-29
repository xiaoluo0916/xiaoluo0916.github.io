// First scene
async function scene1() {
    // set the dimensions and margins of the graph
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#chart1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

    //Read the data
    d3.csv("https://raw.githubusercontent.com/xiaoluo0916/xiaoluo0916.github.io/main/data/crime%20count%20by%20date.csv",

    // When reading the csv, I must format variables:
    function(d){
    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
    }).then(

    // Now I can use this dataset:
    function(data) {

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));
  
    // const tooltip = d3.select("#slide1")
    //     .append("div")
    //     .style("opacity", 0)
    //     .attr("class", "tooltip")
    //     .style("background-color", "black")
    //     .style("border-radius", "5px")
    //     .style("padding", "10")
    //     .style("color", "white")
    //     .style("width", "150px")
    //     .style("height", "50px");

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )
    })
}

// Second scene
async function scene2() {
  // set the dimensions and margins of the graph
  const margin = {top: 10, right: 30, bottom: 30, left: 60},
  width = 800 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

  //Read the data
  d3.csv("https://raw.githubusercontent.com/xiaoluo0916/xiaoluo0916.github.io/main/data/crime%20count%20by%20type%20and%20date.csv",

  // When reading the csv, I must format variables:
  function(d){
  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
  }).then(

  // Now I can use this dataset:
  function(data) {

  // group the data: I want to draw one line per group
  const sumstat = d3.group(data, d => d.primary_type); // nest function allows to group the calculation per level of a factor

  // // Add X axis --> it is a date format
  // const x = d3.scaleTime()
  //   .domain(d3.extent(data, function(d) { return d.date; }))
  //   .range([ 0, width ]);
  // svg.append("g")
  //   .attr("transform", `translate(0, ${height})`)
  //   .call(d3.axisBottom(x));
  
  // Add X axis --> it is a date format
  const x = d3.scaleLinear()
    .domain(d3.extent(data, function(d) { return d.year; }))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5));

  // // Add Y axis
  // const y = d3.scaleLinear()
  //   .domain([0, d3.max(data, function(d) { return +d.value; })])
  //   .range([ height, 0 ]);
  // svg.append("g")
  //   .call(d3.axisLeft(y));
  
  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return +d.value; })])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));
  
  // color palette
  const color = d3.scaleOrdinal()
    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

  // const tooltip = d3.select("#slide1")
  //     .append("div")
  //     .style("opacity", 0)
  //     .attr("class", "tooltip")
  //     .style("background-color", "black")
  //     .style("border-radius", "5px")
  //     .style("padding", "10")
  //     .style("color", "white")
  //     .style("width", "150px")
  //     .style("height", "50px");

  // Add the line
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return x(d.date) })
      .y(function(d) { return y(d.value) })
      )
  })
}
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
  // // set the dimensions and margins of the graph
  // const margin = {top: 10, right: 30, bottom: 200, left: 60},
  // width = 1200 - margin.left - margin.right,
  // height = 600 - margin.top - margin.bottom;

  // // append the svg object to the body of the page
  // const svg = d3.select("#chart2")
  //   .append("svg")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //   .attr("transform", `translate(${margin.left},${margin.top})`);

  // //Read the data
  // d3.csv("https://raw.githubusercontent.com/xiaoluo0916/xiaoluo0916.github.io/main/data/crime%20count%20by%20type.csv").then( function(data) {

  // // X axis
  // const x = d3.scaleBand()
  //   .range([ 0, width ])
  //   .domain(data.map(d => d.primary_type))
  //   .padding(0.2);
  // svg.append("g")
  //   .attr("transform", `translate(0, ${height})`)
  //   .call(d3.axisBottom(x))
  //   .selectAll("text")
  //     .attr("transform", "translate(-10,0)rotate(-45)")
  //     .style("text-anchor", "end");

  // // Add Y axis
  // const y = d3.scaleLinear()
  //   .domain([0, 220000])
  //   .range([ height, 0]);
  // svg.append("g")
  //   .call(d3.axisLeft(y));

  // // Bars
  // svg.selectAll("mybar")
  //   .data(data)
  //   .join("rect")
  //     .attr("x", d => x(d.primary_type))
  //     .attr("y", d => y(d.value))
  //     .attr("width", x.bandwidth())
  //     .attr("height", d => height - y(d.value))
  //     .attr("fill", "#69b3a2")

  // })

  // set the dimensions and margins of the graph
  const margin = {top: 30, right: 30, bottom: 70, left: 60},
  width = 1200 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#chart2")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

  // Parse the Data
  d3.csv("https://raw.githubusercontent.com/xiaoluo0916/xiaoluo0916.github.io/main/data/crime%20count%20by%20type.csv").then( function(data) {

  // X axis
  const x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data.map(d => d.primary_type))
  .padding(0.2);
  svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 13000])
  .range([ height, 0]);
  svg.append("g")
  .call(d3.axisLeft(y));

  // Bars
  svg.selectAll("mybar")
  .data(data)
  .join("rect")
  .attr("x", d => x(d.primary_type))
  .attr("y", d => y(d.value))
  .attr("width", x.bandwidth())
  .attr("height", d => height - y(d.value))
  .attr("fill", "#69b3a2")

  })
}

// Third scene
async function scene3() {
  // set the dimensions and margins of the graph
  const margin = {top: 10, right: 30, bottom: 200, left: 60},
  width = 1200 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#chart3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  //Read the data
  d3.csv("https://raw.githubusercontent.com/xiaoluo0916/xiaoluo0916.github.io/main/data/arrest%20vs%20unarrest%20by%20type.csv").then( function(data) {

    // List of subgroups = header of the csv files = soil condition here
    const subgroups = data.columns.slice(1)

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    const groups = data.map(d => (d.primary_type))

    // Add X axis
    const x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 220000])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // color palette = one color per subgroup
    const color = d3.scaleOrdinal()
      .domain(subgroups)
      .range(['#FFB9B9','#B6FC8D'])

    //stack the data? --> stack per subgroup
    const stackedData = d3.stack()
      .keys(subgroups)
      (data)

    // Show the bars
    svg.append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .join("g")
        .attr("fill", d => color(d.key))
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(d => d)
        .join("rect")
          .attr("x", d => x(d.data.primary_type))
          .attr("y", d => y(d[1]))
          .attr("height", d => y(d[0]) - y(d[1]))
          .attr("width",x.bandwidth())
  })
}

// Fourth scene
async function scene4() {
  // set the dimensions and margins of the graph
  const margin = {top: 10, right: 30, bottom: 100, left: 60},
  width = 1200 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3.select("#chart4")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  //Read the data
  d3.csv("https://raw.githubusercontent.com/xiaoluo0916/xiaoluo0916.github.io/main/data/crime%20count%20by%20type%20and%20date.csv",
    // When reading the csv, I must format variables:
    function(d){
      return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value, primary_type : d.primary_type }
      }
  ).then( function(data) {

    // List of groups (here I have one group per column)
    const allGroup = new Set(data.map(d => d.primary_type))

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    const myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).ticks(7));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Initialize line with first group of the list
    const line = svg
      .append('g')
      .append("path")
        .datum(data.filter(function(d){return d.primary_type=="THEFT"}))
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(+d.value) })
        )
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection?
      const dataFilter = data.filter(function(d){return d.primary_type==selectedGroup})

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(+d.value) })
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(event,d) {
        // recover the option that has been chosen
        const selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })
  })
}
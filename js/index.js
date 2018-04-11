//let myData = {};
const svgWidth = 700;
const svgHeight = 500;
const topGDP = 19000;

const svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "bar-chart");

fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then(function(response) {
    return response.json();
  }).then(function(myJson) {
    //myData = myJson;
    //console.log(myJson.data);
    const barWidth = (svgWidth / myJson.data.length);

    const barChart = svg.selectAll("rect")
      .data(myJson.data)
      .enter()
      .append("rect")
      .attr("y", function(d) {
        //const proportionalHeight = d[1] / topGDP;
        return svgHeight - (svgHeight * (d[1] / topGDP));
      })
      .attr("height", function(d) {
        //const proportionalHeight = d[1] / topGDP;
        return svgHeight * (d[1] / topGDP);
      })
      .attr("width", barWidth)
      .attr("transform", function(d, i) {
        const translate = [barWidth * i, 0];
        return "translate("+ translate +")";
      })
  });

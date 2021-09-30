import * as d3 from "d3";

export function ExTwo (data2, svgRef2) {
        // setting up svg
        const w = 500;
        const h = 500;
        const radius = w / 3;
        const svg = d3.select(svgRef2.current)
          .attr("width", w)
          .attr("height", h)
          .style("margin-top", "500")
          .style("margin-left", "500")
          .style("overflow", "visible");
        console.log("pass setting up svg");
    
        // setting the scaling
        const formattedData = d3.pie().value(d => d.value)(data2);
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
        const color = d3.scaleOrdinal().range(d3.schemeSet2);
        console.log("pass setting the scaling");
    
        // setting the axes
        svg.selectAll()
            .data(formattedData)
            .join("path")
                .attr("d", arcGenerator)
                .attr("fill", d => color(d.value))
                .style("opacity", 0.7);
        console.log("pass setting the axes");
        
        // setting up the data for the svg
        svg.selectAll()
            .data(formattedData)
            .join("text")
                .text(d => d.data2)
                .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
                .style("text-anchor", "middle");
        console.log("pass setting up the data for the svgs");
} 
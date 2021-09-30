import React, { useState, useRef, useEffect } from "react";


import {ExOne} from "./ExampleOne";
import { ExTwo } from "./EampleTwo";

function App() {
  const [data] = useState([25, 59, 35, 15, 94, 10]);
  const svgRef = useRef();

  const [data2] = useState([
    {property: "a", value: 4},
    {property: "b", value: 3},
    {property: "c", value: 10},
    {property: "d", value: 2},
    {property: "e", value: 8},
  ]);
  const svgRef2 = useRef();

  useEffect(() => {
    ExOne(data, svgRef);
    ExTwo(data2, svgRef2);
  }, [data, data2]);

  return (
    <div className="App">
      <svg ref={svgRef}></svg>
      <svg ref={svgRef2}></svg>
    </div>
  );
}

export default App;

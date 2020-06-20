import React, { useState, useEffect } from "react";
import ChartJS from "./components/Chart";
import MadeData from "./components/Data";

const App = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const getData = async () => {
    const charts = [];
    charts.push(<ChartJS key={1} data={MadeData} />);
    setChartsToDisplay(charts);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">{chartsToDisplay}</div>;
};

export default App;

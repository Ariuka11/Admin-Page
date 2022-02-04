import React from "react";
import Chart from "../../components/chart/Chart";
import Info from "../../components/info/Info";
import { userData } from "../../data";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Info />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Home;

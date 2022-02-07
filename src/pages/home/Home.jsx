import React from "react";
import { Outlet } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import Info from "../../components/info/Info";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
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
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

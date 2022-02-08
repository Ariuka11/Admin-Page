import React, { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { userRequest } from "../../axios";
import Chart from "../../components/chart/Chart";
import Info from "../../components/info/Info";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";
const Home = () => {
  const [userStat, setUserStat] = useState([]);
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("stats");
        res.data.map((item) => {
          return setUserStat((prev) => [
            ...prev,
            { name: months[item._id - 1], "Active User": item.total },
          ]);
        });
        console.log(userStat);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);

  return (
    <div className="home">
      <Info />
      <Chart
        data={userStat}
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

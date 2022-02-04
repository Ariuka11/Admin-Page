import {
  Language,
  NotificationsNoneOutlined,
  Settings,
} from "@material-ui/icons";
import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ariuka Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNoneOutlined />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <Settings />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

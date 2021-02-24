import React from "react";
import Menu from "../../../components/sidebar/Menu";
import ScreenRoot from "../../Root";
import { BrowserRouter as Router } from "react-router-dom";

const ScreenUserList = () => {
  return (
    <div className="user-list">
      <Router>
        <Menu/>
        <ScreenRoot/>
      </Router>
    </div>
  );
};

export default ScreenUserList;




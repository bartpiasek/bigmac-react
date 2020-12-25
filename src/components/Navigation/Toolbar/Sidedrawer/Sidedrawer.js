import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
  // conditionas
  return (
    <div className={classes.sideDrawer}>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;

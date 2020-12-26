import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.ToolBar}>
    <DrawerToggle clicked={props.drawerToggleClick} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

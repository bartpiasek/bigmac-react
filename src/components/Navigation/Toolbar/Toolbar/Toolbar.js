import React from "react";
import classes from "./Toolbar.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "../../Sidedrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClick} />
    <div>Logo</div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

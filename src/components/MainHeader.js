import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <div></div>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/welcome"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/users"
            >
              users
            </NavLink>
          </li>
          <li style={{ dispay: "flex" }}>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/gallery "
              style={{ dispay: "flex" }}
            >
              Gallery
            </NavLink>
          </li>
          <div></div>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

import React, { useState } from "react";
import NewYorker from "../../../../static/images/ui/new-yorker.svg";
import navData from "./navigation.json";

import { Link } from "gatsby";

const Navigation = () => {
  const [navState, setNavState] = useState("default");
  return (
    <nav className="navigation" data-state={navState}>
      <ul>
        {navData.map((data) => {
          return (
            <li className="navigation__li" data-color={data.color}>
              <Link className="navigation__link" to={data.slug}>
                {data.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className={``}>
      <h1 className="logo">
        <img src={NewYorker} alt="The New Yorker" />
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;

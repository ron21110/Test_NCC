import React from "react";
import Border from "./Border.png";

function Menu(props) {
  return (
    <div className="menu_container">
      <ul className="menu_ul">
        <li>
          <a href="./">Home</a>
        </li>
        <img className="boder" src={Border} alt="i1" />
        <li>
          <a href="./">Services</a>
        </li>
        <img className="boder" src={Border} alt="i1" />
        <li>
          <a href="./">News</a>
        </li>
        <img className="boder" src={Border} alt="i1" />
        <li>
          <a href="./">Blog</a>
        </li>
        <img className="boder" src={Border} alt="i1" />
        <li>
          <a href="./">Contact</a>
        </li>
        <img className="boder" src={Border} alt="i1" />
      </ul>
    </div>
  );
}

export default Menu;

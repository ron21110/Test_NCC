import React from "react";

function Menu(props) {
  return (
    <div className="menu_container">
      <ul className="menu_ul">
        <li>
          <a href="./">Home</a>
          <hr></hr>
        </li>
        <li>
          <a href="./">Services</a>
          <hr></hr>
        </li>
        <li>
          <a href="./">News</a>
          <hr></hr>
        </li>
        <li>
          <a href="./">Blog</a>
          <hr></hr>
        </li>
        <li>
          <a href="./">Contact</a>
          <hr></hr>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

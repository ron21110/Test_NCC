import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import React from "react";

function Content2(props) {
  return (
    <div className="row1">
      <div className="content2">
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className="row">
          <img className="i1" src={i1} alt="i1" />
          <div className="content2_con">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at{" "}
          </div>
        </div>
        <div className="content2_con_duoi">
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </div>
      </div>
      <div className="content2">
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className="row">
          <img className="i2" src={i2} alt="i2" />
          <div className="content2_con">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at{" "}
          </div>
        </div>
        <div className="content2_con_duoi">
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </div>
      </div>
      <div className="content2">
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className="row">
          <img className="i3" src={i3} alt="i3" />
          <div className="content2_con">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at{" "}
          </div>
        </div>
        <div className="content2_con_duoi">
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </div>
      </div>
    </div>
  );
}

export default Content2;

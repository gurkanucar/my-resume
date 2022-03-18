import React from "react";
import "./Shapes.css";

// import shape1 from "../../../public/shapes/shape1.svg";
import Shape1 from "../../assets/shapes/Shape1.svg";
import Shape2 from "../../assets/shapes/Shape2.svg";
import Shape3 from "../../assets/shapes/Shape3.svg";
import Shape4 from "../../assets/shapes/Shape4.svg";
import Shape5 from "../../assets/shapes/Shape5.svg";
import { randomAnimation } from "./RandomAnimation";

const Shapes = () => {
  return (
    <div className="svg-shapes__root">
      <img
        className={"svg-shapes__item__1 " + randomAnimation(1, 5)}
        src={Shape1}
      />
      <img
        className={"svg-shapes__item__2 " + randomAnimation(1, 5)}
        src={Shape2}
      />
      <img
        className={"svg-shapes__item__3 " + randomAnimation(1, 5)}
        src={Shape3}
      />
      <img
        className={"svg-shapes__item__4 " + randomAnimation(1, 5)}
        src={Shape4}
      />
      <img
        className={"svg-shapes__item__5 " + randomAnimation(1, 5)}
        src={Shape5}
      />
    </div>
  );
};

export default Shapes;

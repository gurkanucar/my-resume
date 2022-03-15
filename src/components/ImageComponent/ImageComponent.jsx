import React from "react";
import "./ImageComponent.css";
const ImageComponent = (props) => {
  const { src, borderRadius, size } = props;

  return (
    <div>
      <img
        src={src}
        style={{
          width: size?.width,
          height: size?.height,
          objectFit: "cover",
          borderRadius: borderRadius,
        }}
        className="ImageComponent"
      />
    </div>
  );
};

export default ImageComponent;

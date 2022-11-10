import React from "react";
import { loadCurrentImage } from "../../helpers/helper";
import "./styles.css";

const Image = ( props ) => {
  
  const { src, alt, className } = props;
  
  return (
    <img src={loadCurrentImage(src)}
         alt={alt}
         className={className ? `Image_${className}` : "Image"}
    />)
}

export default Image;

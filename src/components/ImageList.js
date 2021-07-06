import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <div>
        <ImageCard key={image.id} image={image} />
      </div>
    );
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ alt, src, design }) => {
  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      wrapperProps={{
        style: { transitionDelay: "0.1s" },
      }}
      className={design}
      src={src}
    />
  );
};

export default MyImage;

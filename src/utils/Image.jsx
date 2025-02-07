/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ alt, src, design }) => {
  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: { transitionDelay: "1s" },
      }}
      className={design}
      src={src}
    />
  );
};

export default MyImage;

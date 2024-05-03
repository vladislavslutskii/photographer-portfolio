import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Images from "./SliderImages";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

const ImageSlider = ({ slides }: any) => {
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Fullscreen, Zoom]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
};

export default ImageSlider;

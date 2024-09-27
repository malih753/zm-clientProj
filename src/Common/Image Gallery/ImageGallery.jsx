import React, { useState } from "react";
import { server } from "../../Constants/server";

const ImageGallery = ({ images = [] }) => {
  // State to hold the index of the currently selected image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="flex md:h-[424px] flex-wrap md:flex-nowrap overflow-hidden items-stretch gap-4 md:gap-0">
      {/* Main Image Display */}
      <div className="w-full md:w-[754px]">
        <img
          src={`${server}${images[selectedImageIndex]}`}
          alt={`Main view of ${images[selectedImageIndex]}`}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex flex-row md:flex-col h-full ml-0 md:ml-4 gap-4">
        {images.map((image, index) =>
          index === selectedImageIndex ? null : (
            <img
              key={image}
              src={`${server}${image}`}
              alt={`Thumbnail of ${image}`}
              onClick={() => setSelectedImageIndex(index)}
              className={`w-[235px] xs:h-[138px] overflow-hidden rounded-lg cursor-pointer object-cover ${
                index === selectedImageIndex ? "border-2 border-blue-500" : ""
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ImageGallery;

import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import './ImageViewer.css';

const ImageViewer = ({images}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);



  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          onClick={() => {
            setIsOpen(true);
            setCurrImg(index);
          }}
          className="cursor-pointer hover:opacity-75 transition-opacity duration-300"
        />
      ))}

      <ImgsViewer
        imgs={images.map((src) => ({ src }))}
        currImg={currImg}
        showThumbnails={true}
        isOpen={isOpen}
        
        onClickPrev={() => setCurrImg(currImg - 1)}
        onClickNext={() => setCurrImg(currImg + 1)}
        onClickThumbnail={(index) => setCurrImg(index)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ImageViewer;

import React from 'react';

import './image-item.css'

const ImageItem = ({ photo, setCurrentPhoto }) => {
  return (
    <div className="card-item" onClick={() => setCurrentPhoto(photo.urls.small)}>
      <img src={photo.urls.small} alt={photo.alt_description} className="card-img" />
    </div>
  );
};

export default ImageItem;

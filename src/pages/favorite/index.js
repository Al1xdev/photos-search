import React from 'react';

import './favorit.css';

const Favorite = ({ favorit }) => {
  return (
    <div className="favorit">
      <h2 className="favorit-title">Favorite photos</h2>
      <div className="card-list">
        {favorit.length === 0 ? (
          <p className="sub-title">No favorites photos</p>
        ) : (
          favorit.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.urls.small} alt="item of selected" className="favorit-img"/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favorite;

import React from 'react';

import './history.css';

const History = ({ historyItems }) => {
  return (
    <div className="history container">
      <h2 className="favorit-title">Recent Searches</h2>
      {historyItems.length === 0 && <p className="sub-title">Search history is empty!</p>}
      <div className="key-wrapper">
        {historyItems &&
          historyItems.map((searchItem, index) => {
            return (
              <div key={index} className="btn-key">
                {searchItem}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default History;

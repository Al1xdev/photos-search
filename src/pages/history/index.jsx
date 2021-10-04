import React, { useEffect, useState } from 'react';

import './history.css';

const History = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('recent-searches'));
    if (items !== null) {
      setRecentSearches([...items]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="history">
      <div className="container">
        <div className="history-wrapper">
          <h2 className="history-title">Ваши запросы</h2>
          {recentSearches.length === 0 && (
            <p className="sub-title">История пуста!</p>
          )}
          <div className="history-items">
            {recentSearches &&
              recentSearches.map((searchItem) => {
                return (
                  <div key={searchItem} className="item-key">
                    {searchItem}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

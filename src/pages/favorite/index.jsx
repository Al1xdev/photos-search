import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import ScrollToTop from '../../components/scrollToTop';
import { removeFromFavorit } from '../../store/reducers/Favorite/actions';

import './favorit.css';

const Favorite = () => {
  const dispatch = useDispatch();
  const favorit = useSelector(({ favorit }) => favorit.favorit);

  const removeItem = (id) => {
    dispatch(removeFromFavorit(id));
  };

  return (
    <div className="favorit">
      <h2 className="favorit-title">Избранное</h2>
      <div className="container">
        <div className="card-list">
          {favorit.length === 0 ? (
            <p className="sub-title">Добавьте фотографии!</p>
          ) : null}
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              320: 1,
              500: 2,
              876: 3,
              1200: 4,
            }}
          >
            <Masonry columnsCount={4} gutter="10px">
              {favorit.length > 0 &&
                favorit.map((item) => (
                  <div key={item.id} className="fav-wrapper">
                    <img
                      src={item.urls.small}
                      alt="item of selected"
                      className="favorit-img"
                    />
                    <button
                      className="fav-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <svg
                        height="25px"
                        viewBox="0 0 329.26933 329"
                        width="25px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                      </svg>
                    </button>
                  </div>
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Favorite;

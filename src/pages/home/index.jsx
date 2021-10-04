import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../../components/loader';
import ImageItem from '../../components/image-item';
import ErrorIndicator from '../../components/error-indicator';
import {
  photosRequest,
  setCurrentPhoto,
  setQuery,
  searchPhoto,
} from '../../store/reducers/Home/actions';

import './home.css';
import ScrollToTop from '../../components/scrollToTop';

const Home = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ home }) => home.error);
  const isLoading = useSelector(({ home }) => home.isLoading);
  const photos = useSelector(({ home }) => home.photos);
  const currentPhoto = useSelector(({ home }) => home.currentPhoto);
  const query = useSelector(({ home }) => home.query);

  useEffect(() => {
    dispatch(photosRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSearch = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhoto(query));
  };

  Modal.setAppElement('div');

  return (
    <main className="main">
      <div className="search-row">
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            className="input"
            placeholder="поиск"
            onChange={updateSearch}
            value={query}
            onFocus={(e) => {
              e.target.placeholder = '';
            }}
            onBlur={(e) => {
              e.target.placeholder = 'поиск';
            }}
          />
        </form>
      </div>
      <div className="container">
        <div className="loader-wrapper">{isLoading && <Loader />} </div>
        {error ? <ErrorIndicator /> : null}
        <div className="card-list">
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              320: 1,
              500: 2,
              876: 3,
              1200: 4,
            }}
          >
            <Masonry columnsCount={4}>
              {!isLoading &&
                photos.map((photo) => (
                  <ImageItem key={photo.id} photo={photo} />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <ScrollToTop />
        <Modal isOpen={!!currentPhoto} className="modal">
          <div className="modal-content">
            <img src={currentPhoto} alt="Selected item" className="modal-img" />
            <button
              onClick={() => dispatch(setCurrentPhoto(null))}
              className="button-modal"
            >
              <svg
                height="30px"
                viewBox="0 0 329.26933 329"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
              </svg>
            </button>
          </div>
        </Modal>
      </div>
    </main>
  );
};

export default Home;

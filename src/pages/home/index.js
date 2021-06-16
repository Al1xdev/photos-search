import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { getPhotos, getSearchPhotos } from '../../api';
import ImageItem from '../../components/image-item';
import Loader from '../../components/loader';
import ErrorIndicator from '../../components/error-indicator';

import './home.css';

const Home = ({ setFavorit, favorit, search, setSearch, setHistoryItems, historyItems }) => {
  const [query, setQuery] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await getPhotos();
        setIsLoading(true);
        setPhotos(data);
      }
      fetchData();
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    async function fetchDataSearch() {
      setIsLoading(false);
      if (query !== undefined && query !== '') {
        const { data } = await getSearchPhotos(query);
        setIsLoading(true);
        setPhotos(data.results);
      }
    }
    fetchDataSearch();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchPhotos = (e) => {
    e.preventDefault();
    setQuery(search);
    setHistoryItems([...historyItems, search]);
    setSearch('');
  };

  Modal.setAppElement('div');

  return (
    <div className="main">
      <div className="search-row">
        <form onSubmit={searchPhotos} className="form">
          <input
            type="text"
            className="input"
            placeholder="search"
            onChange={updateSearch}
            value={search}
          />
          <button className="button">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill="#012FAA">
                  <path d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"></path>
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
      <div className="loader-wrapper">{!isLoading && <Loader />} </div>
      {error && <ErrorIndicator />}
      <div className="card-list">
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 500: 2, 876: 3, 1200: 4 }}>
          <Masonry columnsCount={4}>
            {isLoading &&
              photos.map((photo) => {
                return (
                  <ImageItem
                    key={photo.id}
                    photo={photo}
                    setCurrentPhoto={setCurrentPhoto}
                    favorit={favorit}
                    setFavorit={setFavorit}
                  />
                );
              })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <Modal isOpen={!!currentPhoto} className="modal">
        <div className="modal-content">
          <img src={currentPhoto} alt="Selected item" className="modal-img" />
          <button onClick={() => setCurrentPhoto(null)} className="button-modal">
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
  );
};

export default Home;

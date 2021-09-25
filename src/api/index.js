import axios from 'axios';

import { BASE_URL, HEADER_CONFIG } from '../config';

export const getPhotos = async () => {
  const response = await axios.get(
    `${BASE_URL}/photos?per_page=${20}&client_id=${
      process.env.REACT_APP_API_KEY
    }`,
    {
      headers: HEADER_CONFIG,
    },
  );
  return response;
};

export const getSearchPhotos = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/photos/?query=${query}&per_page=${20}&client_id=${
      process.env.REACT_APP_API_KEY
    }`,
    {
      headers: HEADER_CONFIG,
    },
  );
  return response;
};

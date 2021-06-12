import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';

export const getPhotos = async () => {
  const response = await axios.get(
    `${BASE_URL}/photos?per_page=${20}&client_id=${process.env.REACT_APP_API_KEY}`,
    {
      headers: { 'Accept-Version': 'v1', withCredentials: 'true' },
    },
  );
  if (response.status !== 200) {
    throw new Error(`Could not fetch ${BASE_URL}, received ${response.status}`);
  }
  return response;
};

export const getSearchPhotos = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/photos/?query=${query}&per_page=${20}&client_id=${
      process.env.REACT_APP_API_KEY
    }`,
    {
      headers: { 'Accept-Version': 'v1', withCredentials: 'true' },
    },
  );
  if (response.status !== 200) {
    throw new Error(`Could not fetch ${BASE_URL}, received ${response.status}`);
  }
  return response;
};

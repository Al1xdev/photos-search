import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';

export const getPhotos = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/photos?per_page=${20}&client_id=${process.env.REACT_APP_API_KEY}`,
      {
        headers: { 'Accept-Version': 'v1' },
      },
    );
    return response;
  } catch (error) {
    console.log('Something went wrong' + error);
  }
};

export const getSearchPhotos = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/photos/?query=${query}&per_page=${20}&client_id=${
        process.env.REACT_APP_API_KEY
      }`,
      {
        headers: { 'Accept-Version': 'v1' },
      },
    );
    return response;
  } catch (error) {
    console.log('Something went wrong' + error);
  }
};

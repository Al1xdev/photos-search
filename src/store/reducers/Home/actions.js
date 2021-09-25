export const photosRequest = () => ({
  type: 'PHOTOS_REQUEST',
});

export const setData = (data) => ({
  type: 'FETCH_DATA',
  payload: { data },
});

export const setLoaded = (isLoaded) => ({
  type: 'SET_LOADED',
  payload: { isLoaded },
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: { error },
});

export const setCurrentPhoto = (photo) => ({
  type: 'SET_CURRENT_PHOTO',
  payload: { photo },
});

export const setQuery = (query) => ({
  type: 'SET_QUERY',
  payload: { query },
});

export const searchPhoto = (query) => ({
  type: 'SEARCH_PHOTO',
  payload: { query },
});

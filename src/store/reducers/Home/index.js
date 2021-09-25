const ititialState = {
  photos: [],
  error: null,
  isLoading: false,
  currentPhoto: null,
  query: '',
};

export const HomeReducer = (state = ititialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        photos: action.payload.data,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoading: action.payload.isLoaded,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    case 'SET_CURRENT_PHOTO':
      return {
        ...state,
        currentPhoto: action.payload.photo,
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
};

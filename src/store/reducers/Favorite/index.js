const initialState = {
  favorit: [],
};

export const favotiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORIT':
      return {
        ...state,
        favorit: [...state.favorit, action.payload.favorit],
      };
    case 'REMOVE_FROM_FAVORIT': {
      const currentPhoto = state.favorit.find(
        (item) => item.id === action.payload.id,
      );
      const indexPhoto = state.favorit.findIndex(
        (item) => item.id === currentPhoto.id,
      );
      return {
        ...state,
        favorit: [
          ...state.favorit.slice(0, indexPhoto),
          ...state.favorit.slice(indexPhoto + 1),
        ],
      };
    }
    default:
      return state;
  }
};

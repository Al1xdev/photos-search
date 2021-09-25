export const addToFavorit = (favorit) => ({
  type: 'ADD_TO_FAVORIT',
  payload: { favorit },
});

export const removeFromFavorit = (id) => ({
  type: 'REMOVE_FROM_FAVORIT',
  payload: { id },
});

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import { HomeReducer } from './Home';
import { favotiteReducer } from './Favorite';
import { fetchPhotosWatcher } from './Home/sagas';

export const rootReducer = combineReducers({
  home: HomeReducer,
  favorit: favotiteReducer,
});

export function* rootSaga() {
  yield all([fetchPhotosWatcher()]);
}

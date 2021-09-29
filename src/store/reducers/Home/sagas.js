import { takeEvery, put, call } from 'redux-saga/effects';

import { setData, setLoaded, setError, setQuery } from './actions';
import { getPhotos, getSearchPhotos } from '../../../api';
import { saveToLocalStorage } from '../../../utils';

function* fetchPhotos() {
  try {
    yield put(setLoaded(true));
    const responce = yield call(getPhotos);
    yield put(setData(responce.data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoaded(false));
  }
}

function* searchByQuery(action) {
  try {
    yield put(setLoaded(true));
    const responce = yield call(getSearchPhotos, action.payload.query);
    yield put(setData(responce.data.results));
    yield call(saveToLocalStorage, action.payload.query);
    yield put(setQuery(''));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoaded(false));
  }
}

export function* fetchPhotosWatcher() {
  yield takeEvery('PHOTOS_REQUEST', fetchPhotos);
  yield takeEvery('SEARCH_PHOTO', searchByQuery);
}

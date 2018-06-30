import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fireRequest({ url, params }) {
    yield put({
        type: 'FETCHING_DATA'
    });
     
    const response = yield call(axios.get, url, params);
    
    yield put({
    type: 'SEARCH_RESULTS_RECEIVED',
    results: response.data,
    });
    
  }
  
  export function* userWantsToFetch() {
    yield takeLatest('TRIGGER_FETCH', fireRequest);
  }

  export function* userWantsToFetchMore() {
    yield takeLatest('TRIGGER_FETCH_MORE', fireRequest);
  }
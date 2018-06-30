import { all } from 'redux-saga/effects';

import {userWantsToFetch, userWantsToFetchMore} from './containers/home/home.sagas';

export default function* rootSaga() {
    yield all([
        userWantsToFetch(),
        userWantsToFetchMore()
    ]);
  }
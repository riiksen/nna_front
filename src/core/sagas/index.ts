import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { loginSaga } from './login';

export function* sagas(): SagaIterator {
  yield all([
    call(loginSaga),
  ]);
}

import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';

export function* sagas(): SagaIterator {
  yield all([]);
}

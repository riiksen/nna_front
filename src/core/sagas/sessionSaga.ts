import * as axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { call } from 'redux-saga/effects';

import { refreshAccessTokenFailure } from '../actions';
import { config } from '@/config/config';

export function* refreshAccessToken(): SagaIterator {
  while(true) {
    try {
      const apiCall = (): void => {

      };

    } catch (e) {
      console.log(e);
      refreshAccessTokenFailure();
    }
  }
}

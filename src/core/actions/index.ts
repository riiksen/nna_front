import { createAction } from 'typesafe-actions';

export const appInit = createAction('APP_INIT');

export const login = createAction('LOGIN_REQUEST');

export const logout = createAction('LOGOUT');

export const refreshAccessTokenFailure = createAction('REFRESH_ACTION_TOKEN_FAILURE');

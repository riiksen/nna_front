import { createAction } from 'typesafe-actions';

export const appInit = createAction('APP_INIT');
export const appStart = createAction('APP_START')<string>();

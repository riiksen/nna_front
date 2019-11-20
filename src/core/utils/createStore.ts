import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

// TODO: Add path mappings
import { reducers } from '../reducers';
import { sagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, enhancers);
sagaMiddleware.run(sagas);

export { store };

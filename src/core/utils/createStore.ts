import { createStore } from 'redux';

// TODO: Add path mappings
import { reducers } from '../reducers';

const store = createStore(reducers);

export { store };

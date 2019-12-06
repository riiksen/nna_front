import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './core/utils/createStore';
import { Router } from './router';

// eslint-disable-next-line arrow-body-style
const App: React.FC = () => {
  return (
    <div className="App">
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </div>
  );
};

export { App };

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Index } from './components/Page/Index/Index';
import { Jackpot } from './components/Page/Jackpot/Jackpot';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/jackpot" component={Jackpot} />
    </Switch>
  );
};

export { Routes };
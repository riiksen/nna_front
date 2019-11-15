import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';

import { Index } from './components/Page/Index/Index';
import { Jackpot } from './components/Page/Jackpot/Jackpot';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/jackpot' component={Jackpot} />
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
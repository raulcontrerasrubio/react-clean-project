import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';

export const Navigation = (
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route render={() => <Redirect to='/' />} />
  </Switch>
);

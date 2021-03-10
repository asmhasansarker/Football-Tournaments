import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import TeamDetails from '../TeamDetails/TeamDetails';

const Container = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/team/:teamId">
                    <TeamDetails></TeamDetails>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    );
};

export default Container;
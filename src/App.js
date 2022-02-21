import './App.css';
import React, { Suspense } from 'react';
import {Route, Router, Switch} from "react-router-dom";

import Urls from "./common/constants/urls";
import history from "./utils/history";

import MoviesList from "./pages/MoviesList";
import {Header} from "./components";

function App() {
  return (
      <Router history={history}>
        <Suspense>
          <Header />
          <Switch>
            <Route
                exact
                path={Urls.movies}
                component={props => <MoviesList {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;

import './App.css';
import React, { Suspense } from 'react';
import {Route, Router, Switch} from "react-router-dom";

import Urls from "./common/constants/urls";
import history from "./utils/history";

import MoviesListPage from "./pages/MoviesList";
import {Header} from "./components";
import DisplayPage from "./pages/Display";

function App() {
  return (
      <Router history={history}>
        <Suspense>
          <Header />
          <Switch>
            <Route
                exact
                path={Urls.movies}
                component={props => <MoviesListPage {...props} />}
            />
            <Route
                  exact
                  path={Urls.display}
                  component={props => <DisplayPage {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;

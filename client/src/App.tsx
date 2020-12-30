import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import * as pages from './pages';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={pages.Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

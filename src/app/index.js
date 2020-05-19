
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components';
import { PlantsList, PlantsInsert, PlantsUpdate } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/plants/list" exact component={PlantsList} />
        <Route path="/plants/create" exact component={PlantsInsert} />
        <Route
          path="/plants/update/:id"
          exact
          component={PlantsUpdate}
        />
      </Switch>
    </Router>
  )
}

export default App;
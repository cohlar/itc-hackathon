import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SelectProfile from './pages/SelectProfile';
import SeniorIndex from './pages/SeniorIndex';
import VolunteerIndex from './pages/VolunteerIndex';

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={SelectProfile} />
          <Route exact path='/senior' component={SeniorIndex} />
          <Route exact path='/volunteer' component={VolunteerIndex} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;

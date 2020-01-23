import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SelectProfile from './pages/SelectProfile';
import SeniorIndex from './pages/SeniorIndex';
import VolunteerIndex from './pages/VolunteerIndex';
import VolunteerAcceptedRequest from './pages/VolunteerAcceptedRequest';
import VolunteerFinished from './pages/VolunteerFinished';
import AppContext from './context/AppContext';
import { defaultLocation } from './config/demoConstants';

function App() {
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const stateContext = {
    currentLocation, setCurrentLocation,
    selectedRequest, setSelectedRequest,
  }

  return (
    <main className="App">
      <Router>
        <Switch>
          <AppContext.Provider value={stateContext}>
            <Route exact path='/' component={SelectProfile} />
            <Route exact path='/senior' component={SeniorIndex} />
            <Route exact path='/volunteer' component={VolunteerIndex} />
            <Route exact path='/volunteer/accepted-request' component={VolunteerAcceptedRequest} />
            <Route exact path='/volunteer/finished' component={VolunteerFinished} />
          </AppContext.Provider>
        </Switch>
      </Router>
    </main>
  );
}

export default App;

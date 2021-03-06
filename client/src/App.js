import React, { Component } from 'react';
import AdsList from './components/AdsList'
import AdDetail from './components/AdDetail'
import PlaceAd from './containers/PlaceAd'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
//import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/ads" component={AdsList} />
          <Route exact path="/ads/:id" component={AdDetail} />
          <Route exact path="/" render={ () => <Redirect to="/ads" /> } />
          <Route exact path="/place-ad" component={PlaceAd} />
        </div>
      </Router>
    )
  }
}

export default App;

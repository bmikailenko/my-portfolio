import React from 'react';
import About from './About';
import Landing from './Landing';
import Projects from './Projects';
import Dashboard from './Dashboard';
import Navigation from './Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;

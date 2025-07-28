import './App.css';
import React, {Fragment} from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'tachyons';
import About from './components/About';
import Recognition from './components/Recognition';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';

function App() {
  return (
    <Router>
        <Fragment>
          <Route component={Navigation} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/recognition" component={Recognition} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/publications" component={Publications} />
          </Switch>
        </Fragment>
      </Router>
  );
}

export default App;

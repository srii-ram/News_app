import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          
          <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} country="us" pageSize={12} category="general" key="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} country="us" pageSize={12} category="business" key="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} country="us" pageSize={12} category="entertainment" key="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} country="us" pageSize={12} category="health" key="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} country="us" pageSize={12} category="science" key="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} country="us" pageSize={12} category="sports" key="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} country="us" pageSize={12} category="technology" key="technology"/></Route>
        </Switch>
        </Router>
        
        
      </div>
    )
  }
}

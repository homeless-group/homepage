import React, { Component } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Activities from './views/Activities'
import About from './views/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/#social' component={Home} />
            <Route exact path='/#community' component={Home} />
            <Route path='/activities' component={Activities} />
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

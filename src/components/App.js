import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router} from'react-router-dom'
import Section from './Section';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Section />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
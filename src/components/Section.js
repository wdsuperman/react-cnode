import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Main from './Main';
import Showtopic from './Showtopic';

class Section extends Component {
  render() {
    return (
      <div>
      <Route path='/' exact component={Main}/>
      <Route path='/topic/:id' component={Showtopic}/>
      </div>
    );
  }
}

export default Section;
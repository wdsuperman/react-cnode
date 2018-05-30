import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Main from './Main';
import Showtopic from './Showtopic';
import User from './User';

class Section extends Component {
  render() {
    return (
      <div>
      <Route path='/' exact component={Main}/>
      <Route path='/topic/:id' component={Showtopic}/>
      <Route path='/user/:loginname' component={User}/>
      </div>
    );
  }
}

export default Section;
import React, { Component } from 'react';

class Showtopic extends Component {
  render() {
    const { id } = this.props.match.params
    const state = this.props
    console.log(state)
    return (
      <div>
        {id}
      </div>
    );
  }
}

export default Showtopic;
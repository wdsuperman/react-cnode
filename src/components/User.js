import React, { Component } from 'react';

class User extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.location.pathname}
      </div>
    );
  }
}

export default User;
import React, { Component } from 'react';
import enhancers from './enhancers';

class MyBets extends Component {
  componentDidMount(){
    this.props.getMyBets();
  }
  render() {
    return (
      <div>MyBets</div>
    );
  }
}

export default enhancers.redux(MyBets);
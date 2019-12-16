import React, { Component } from 'react';
import enhancers from './enhancers';

class BetDetail extends Component {
  componentDidMount(){
    const { 
      getBet,
      match: { params: { id }}
    } = this.props;
    getBet(parseInt(id))
  }

  render() {
    return (
    <div style={{color: "#fff"}}><pre>{JSON.stringify(this.props.bet)}</pre></div>
    );
  }
}

export default enhancers.redux(BetDetail);
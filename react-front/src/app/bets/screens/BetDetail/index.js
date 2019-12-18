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
    const { bet } = this.props;
    return (
      <div style={{color: "#fff"}}>
        <pre>{JSON.stringify(this.props.bet)}</pre>
        <button onClick={() => this.props.agreeBetWinner(bet.id, 1)}>Winner 1</button>
        <button onClick={() => this.props.agreeBetWinner(bet.id, 2)}>Winner 2</button>
      </div>
    );
  }
}

export default enhancers.redux(BetDetail);
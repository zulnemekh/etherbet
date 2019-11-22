import React, { Component } from 'react';
import enhancers from './enhancers';


class Index extends Component {
  componentDidMount(){
    const { getBets } = this.props;
    getBets();
  }
  render() {
    const { bets } = this.props;
    const takeBet = "Take Bet";
    return (<div className="tokens-area">

      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        {bets && bets.map((bet) => {
          return (
            <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l" key={bet.id}>
              <div className="tokens mr-l50">
                <div className="token-name"> {bet.category} </div>
                <div className="token-body">
                  <button className="left-btn" onClick=""> {bet.par1} </button>
                  <p>VS</p>
                  <button className="left-btn-2" onClick=""> {bet.par2} </button>
                  <hr></hr>
                  <span className="token-con"> {bet.description} </span>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
  }
}

export default enhancers.redux(Index);

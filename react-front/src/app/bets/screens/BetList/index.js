import React, { Component } from 'react';
import UIKit from 'uikit';
import enhancers from './enhancers';
import TakeBet from '../../../core/components/TakeBet';


class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedBet: {},
    }
  }

  componentDidMount(){
    const { getBets } = this.props;
    getBets();
  }

  onShowModal(winner, bet_id, par){
    this.setState({
      selectedBet: {
        bet_id: bet_id,
        winner: winner,
        par: par,
      }
    });
    UIKit.modal("#modal-takebet").show();
  }

  render() {
    const { bets } = this.props;
    const { selectedBet } = this.state;
    // button hover hiihed "Take Bet" gsn text gargah.
    const takeBet = "Take Bet";
    return (<div className="tokens-area">

      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        {bets && bets.map((bet) => {
          return (
            <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l" key={bet.id}>
              <div className="tokens mr-l50">
                <div className="token-name"> {bet.category} </div>
                <div className="token-body">
                  {
                    <button className="left-btn" onClick={()=>this.onShowModal(1, bet.id, bet.par1)}>
                      {bet.par1}
                    </button>
                  }
                  <p>VS</p>
                  {
                    <button className="left-btn" onClick={()=>this.onShowModal(2, bet.id, bet.par2)}>
                      {bet.par2}
                    </button>
                  }
                  <hr></hr>
                  <span className="token-con"> {bet.description} </span>
                </div>
              </div>
            </div>
          )
        })}

      </div>
      <TakeBet selectedBet={selectedBet? selectedBet: ""} />
    </div>
  );
  }
}

export default enhancers.redux(Index);

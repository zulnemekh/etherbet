import React, { Component } from 'react';
import enhancers from './enhancers';
import BetItem from './BetItem';

class BetList extends Component {

  componentDidMount(){
    const { getBets } = this.props;
    getBets();
  }

  render() {
    const { bets } = this.props;

    return (<div className="tokens-area">
      <div className="uk-child-width-expand@s uk-text-center" uk-grid="true">
        {(bets || []).map(bet => <BetItem key={bet.id} bet={bet}/>)}
      </div>
    </div>
  );
  }
}

export default enhancers.redux(BetList);

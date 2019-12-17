import React from 'react';
import { Link } from 'react-router-dom';
import components from '../../components';
import moment from 'moment';

function convertTime(timestamp){
  return moment.unix(timestamp).toISOString()
}

const TakeBetModal = components.TakeBetModal;
const Countdown = components.Countdown;

const BetItem = ({bet}) => (
  <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l" key={bet.id}>
      <div className="tokens mr-l50">
        <div className="token-name"> {bet.category} </div>
    
        <div className="token-body">
          <TakeBetModal winner={1} bet_id={bet.id} par={bet.par1} />
          <p>VS</p>
          <TakeBetModal winner={2} bet_id={bet.id} par={bet.par2} />
          <hr/>
          <Countdown time={convertTime(bet.expiryDate)}/>
          <hr/>
          <span className="token-con"> {bet.description} </span>
          <Link to={`bets/${bet.id}`}>Detail</Link>
        </div>
      </div>
  </div>
);

export default BetItem;
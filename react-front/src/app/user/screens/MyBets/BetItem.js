import React from 'react';
import { Link } from 'react-router-dom';
import components from '../../../bets/components';
import { convertTime } from '../../helpers';



const TakeBetModal = components.TakeBetModal;
const Countdown = components.Countdown;

const BetItem = ({ bet }) => (
  <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l" key={bet.id}>
    <div className="tokens mr-l50">
      <div className="token-name"> {bet.category} </div>

      <div className="token-body bet-item">
        <TakeBetModal parId={1} bet_id={bet.id} par={bet.par1} winner={bet.winner} />
        <p>VS</p>
        <TakeBetModal parId={2} bet_id={bet.id} par={bet.par2} winner={bet.winner} />
        <hr />
        <Countdown time={convertTime(bet.expiryDate)} />
        <hr />
        <span className="token-con"> {bet.description} </span>
        <hr />
        <Link to={`bets/${bet.id}`} className="btn1">More</Link>
      </div>
    </div>
  </div>
);

export default BetItem;
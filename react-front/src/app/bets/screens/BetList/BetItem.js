import React from 'react';
import components from '../../components';

const TakeBetModal = components.TakeBetModal;

const BetItem = ({bet}) => (
  <div className="uk-width-1-1@s uk-width-1-3@m uk-width-1-3@l" key={bet.id}>
    <div className="tokens mr-l50">
      <div className="token-name"> {bet.category} </div>
      <div className="token-body">
        <TakeBetModal winner={1} bet_id={bet.id} par={bet.par1} />
        <p>VS</p>
        <TakeBetModal winner={2} bet_id={bet.id} par={bet.par2} />
        <hr></hr>
        <span className="token-con"> {bet.description} </span>
      </div>
    </div>
  </div>
);

export default BetItem;
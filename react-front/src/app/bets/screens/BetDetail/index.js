import React, { Component } from 'react';
import enhancers from './enhancers';
import components from '../../components';
import { convertTime, toEther } from '../../helpers';

const { TakeBetModal, Countdown } = components;

class BetDetail extends Component {
  componentDidMount() {
    const {
      getBet,
      match: { params: { id } }
    } = this.props;
    getBet(parseInt(id))
  }

  render() {
    const { bet, accountAddress, agreeBetWinner,isLoadingBet, isTakingBet, isAgreeLoading } = this.props;
    return (
      // <div style={{color: "#fff"}}>
      //   <button onClick={() => this.props.agreeBetWinner(bet.id, 1)}>Winner 1</button>
      //   <button onClick={() => this.props.agreeBetWinner(bet.id, 2)}>Winner 2</button>
      // </div>
      <div className="tokens-area">{bet &&
        <div className="tokens">
          <div className="token-name"> {bet.betCategory}</div>

          <div className="token-body bet-detail" style={{ color: "#fff", padding: "32px 160px" }}>
          {(isLoadingBet || isTakingBet || isAgreeLoading) && <div uk-spinner="true"></div>}
            <Countdown time={convertTime(bet.closeTIMESTAMP)} />
            <hr className="uk-divider-icon" />
            {bet.description}
            <br />
            <div className="uk-grid-match uk-child-width-expand@s uk-text-center uk-margin-top" uk-grid="true">
              <div className="uk-text-center">
                <TakeBetModal parId={1} bet_id={bet.id} par={bet.par1} winner={bet.winner} />
                <h3 className="uk-margin-top" style={{ color: "#fff" }}>{bet.betAmountOf && `${toEther(bet.betAmountOf.par1)} ETH`}</h3>

              </div>
              <div className="uk-text-center">
                <TakeBetModal parId={2} bet_id={bet.id} par={bet.par2} winner={bet.winner} />
                <h3 className="uk-margin-top" style={{ color: "#fff" }}>{bet.betAmountOf && `${toEther(bet.betAmountOf.par2)} ETH`}</h3>
              </div>
            </div>
            {(accountAddress === bet.owner_address && bet.winner != '1' && bet.winner != '2') && <div>
              <h4 style={{color: "#fff"}}>Choose winner</h4>
              <div className="uk-grid-match uk-child-width-expand@s uk-text-center uk-margin-top" uk-grid="true">
                <div>
                  <button className="btn1" onClick={() => agreeBetWinner(bet.id, 1)}>WIN {bet.par1}</button>
                </div>
                <div>
                  <button className="btn1" onClick={() => agreeBetWinner(bet.id, 2)}>WIN {bet.par2}</button>
                </div>
              </div>
            </div>}
            <h2 className="uk-margin-bottom uk-margin-top" style={{ color: "#fff" }}>TOTAL: {bet.totalAmount ? toEther(bet.totalAmount): 0}</h2>
          </div>
        </div>}
      </div>
    );
  }
}

export default enhancers.redux(BetDetail);
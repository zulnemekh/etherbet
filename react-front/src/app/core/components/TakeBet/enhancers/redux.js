import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';
import core from 'core';
import { utils } from 'web3';

const getBetTakeLoader = selectors.makeLoadingSelector(constants.TAKE_BET)

export const mapStateToProps = state => ({
  loader: getBetTakeLoader(state)
});

export const mapDispatchToProps = dispatch => ({
  takeBet(values, selectedBet){
    console.log("REDUX");
    console.log(values);
    console.log(selectedBet);
    dispatch(actions.takeBet({
      bet_id: selectedBet.bet_id,
      winner: selectedBet.winner,
    }));
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);

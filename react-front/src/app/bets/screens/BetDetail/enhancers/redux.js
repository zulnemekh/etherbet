import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';
import * as coreSelectors from 'core/selectors';

const getBetLoader = selectors.makeLoadingSelector(constants.GET_BET);

export const mapStateToProps = state => ({
  isLoadingBet: getBetLoader(state),
  bet: selectors.getSelectedBet(state),
  accountAddress: coreSelectors.getProfile(state).accountAddress,
});

export const mapDispatchToProps = dispatch => ({
  getBet(id){
    dispatch(actions.getBet(id))
  },
  agreeBetWinner(id, winner){
    dispatch(actions.agreeBetWinner({id, winner}))
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
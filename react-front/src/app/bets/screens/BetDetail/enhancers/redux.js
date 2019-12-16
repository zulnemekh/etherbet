import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';

const getBetLoader = selectors.makeLoadingSelector(constants.GET_BET);

export const mapStateToProps = state => ({
  isLoadingBet: getBetLoader(state),
  bet: selectors.getSelectedBet(state),
});

export const mapDispatchToProps = dispatch => ({
  getBet(id){
    dispatch(actions.getBet(id));
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
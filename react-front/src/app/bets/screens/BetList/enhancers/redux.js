import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';

const getBetsLoader = selectors.makeLoadingSelector(constants.GET_BETS);
export const mapStateToProps = state => ({
  isLoadingBets: getBetsLoader(state),
  bets: selectors.getBetList(state),
});

export const mapDispatchToProps = dispatch => ({
  getBets(){
    dispatch(actions.getBets());
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
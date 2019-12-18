import { connect } from 'react-redux';

import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';

const getCreateBetLoading = selectors.makeLoadingSelector(constants.CREATE_BET);
export const mapStateToProps = state => ({
  profile: selectors.getProfile(state),
  isCreateBetLoading: getCreateBetLoading(state),
});

export const mapDispatchToProps = dispatch => ({
  unlock(){
    dispatch(actions.unlockMetamask())
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
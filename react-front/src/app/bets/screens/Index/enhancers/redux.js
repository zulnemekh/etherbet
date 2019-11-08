import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';
import core from 'core';

export const mapStateToProps = state => ({
  loading: selectors.getLoader(state)[constants.CREATE_BET],
});

export const mapDispatchToProps = dispatch => ({
  getBets(){
    dispatch(actions.getBets());
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
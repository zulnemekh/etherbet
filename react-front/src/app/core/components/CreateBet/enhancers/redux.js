import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';
import moment from 'moment';
import core from 'core';
import { utils } from 'web3';

const getBetCreateLoader = selectors.makeLoadingSelector(constants.CREATE_BET)

export const mapStateToProps = state => ({
  loader: getBetCreateLoader(state)
});

export const mapDispatchToProps = dispatch => ({
  createBet(values){
    dispatch(actions.createBet([
      values.par1,
      values.par2,
      moment(values.closeTIMESTAMP).unix(),
      values.isAvailable,
      values.bType,
      values.description,
      true
    ]));
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
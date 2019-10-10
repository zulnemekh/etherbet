import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';
import core from 'core';

export const mapStateToProps = state => ({
  loading: selectors.getLoader(state)[constants.CREATE_BET],
});

export const mapDispatchToProps = dispatch => ({
  createBet(values){
    console.log(values);
    dispatch(actions.createBet(
      [
        values.player1,
        values.player2,
        values.closeTime,
        values.isAvailable,
        values.description,
        values.category,
      ]
    ))
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
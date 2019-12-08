import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import * as selectors from '../../../selectors';

export const mapStateToProps = state => ({
  
});

export const mapDispatchToProps = dispatch => ({
  takeBet(values){
    dispatch(actions.takeBet(values));
  },
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);

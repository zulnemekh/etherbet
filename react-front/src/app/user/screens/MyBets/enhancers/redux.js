import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors';
import * as constants from '../../../constants';

export const mapStateToProps = state => ({

});
export const mapDispatchToProps = dispatch => ({
  getMyBets(){
    dispatch(actions.getMyBets())
  }
});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
import React from 'react';
import { withFormik } from 'formik';
import enhancers from './enhancers';

const TakeBet = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  loader,
  selectedBet,
}) => (
<div id="modal-takebet" uk-modal="true">
  <div className="uk-modal-dialog">
    <form onSubmit={handleSubmit} className="uk-form-stacked">
    <button className="uk-modal-close-default" type="button" uk-close="true"></button>
    <div className="uk-modal-header">
      <h2 className="uk-modal-title">Take Bet for {selectedBet.par}</h2>
    </div>
    <div className="uk-modal-body uk-grid-small" uk-grid="true">
      {loader ? <span uk-spinner="ratio: 4.5"></span>
      :<>
      <div className="uk-width-1-2">
        <label className="uk-form-label" htmlFor="Participant 1">Bet amount</label>
        <div className="uk-form-controls">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
            name="amount"
            className="uk-input"
            id="amount"
            type="number"
            placeholder="ETH 0.1"/>
        </div>
      </div>
      </>}
    </div>
    <div className="uk-modal-footer uk-text-right">
      <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
      <button className="uk-button uk-button-primary" type="submit">Take</button>
    </div>
  </form>

  </div>
</div>
);

const withForm =  withFormik({
  mapPropsToValues: () => ({
    bet_id: '',
    winner: '',
    amount: '',
  }),

  handleSubmit: (values, { props: {takeBet, selectedBet} }) => {
    // console.log(props)
    takeBet(values, selectedBet);
  },

  displayName: 'TakeBet',
})(TakeBet);

export default enhancers.redux(withForm);

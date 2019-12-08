import React from 'react';
import { withFormik } from 'formik';
import UIKit from 'uikit';
import enhancers from './enhancers';


const TakeBetModal = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  loader,
  par,
  bet_id,
  resetForm,
  winner
}) => (<>
  <button
    className="left-btn"
    onClick={() => {
      UIKit.modal(`#modal-takebet-${bet_id}-${winner}`).show();
      setFieldValue('amount', 0)
    }}>
    {par}
  </button>
  <div id={`modal-takebet-${bet_id}-${winner}`} uk-modal="true">
    <div className="uk-modal-dialog">
      <form onSubmit={handleSubmit} className="uk-form-stacked">
        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Take Bet for {par}</h2>
        </div>
        <div className="uk-modal-body uk-grid-small" uk-grid="true">
          {loader ? <span uk-spinner="ratio: 4.5"></span>
            : <>
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
                    step="0.00001"
                    min="0"
                    placeholder="ETH 0.1" />
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
</>);

const withForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    bet_id: props.bet_id,
    winner: props.winner,
    amount: 0,
  }),

  handleSubmit: (values, { props: { takeBet } }) => {
    takeBet(values);
  },

  displayName: 'TakeBet',
})(TakeBetModal);

export default enhancers.redux(withForm);

import React from 'react';
import { withFormik } from 'formik';
import DateTimePicker from 'react-datetime-picker';
import UIKit from 'uikit';
import moment from 'moment';
import enhancers from './enhancers';

const CreateBet = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
  loader,
}) => (<>
<button className="btn1" onClick={()=>UIKit.modal("#modal-sections").show()}><span>Create Bet</span></button>
<div id="modal-sections" uk-modal="true">
  <div className="uk-modal-dialog">

    <form onSubmit={handleSubmit} className="uk-form-stacked">
    <button className="uk-modal-close-default" type="button" uk-close="true"></button>
    <div className="uk-modal-header">
      <h2 className="uk-modal-title">Create Bet</h2>
    </div>
    <div className="uk-modal-body uk-grid-small" uk-grid="true">
      {loader ? <span uk-spinner="ratio: 4.5"></span>
      :<>
      <div className="uk-width-1-2">
        <label className="uk-form-label" htmlFor="Participant 1">Participant 1</label>
        <div className="uk-form-controls">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.par1}
            name="par1"
            className="uk-input"
            id="Participant 1"
            type="text"
            placeholder="Some text..."/>
        </div>
      </div>
      <div className="uk-width-1-2">
        <label className="uk-form-label" htmlFor="Participant 2">Participant 2</label>
        <div className="uk-form-controls">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.par2}
            name="par2"
            className="uk-input"
            id="Participant 2"
            type="text" placeholder="Some text..."/>
        </div>
      </div>

      <div className="uk-width-1-2">
        <label className="uk-form-label" htmlFor="Close Time">Close Time</label>
        <div className="uk-form-controls">
          <DateTimePicker
            value={values.closeTIMESTAMP}
            name="closeTIMESTAMP"
            onChange={date => setFieldValue('closeTIMESTAMP', date)}
          />
        </div>
      </div>

      <div className="uk-width-1-2">
        <label className="uk-form-label" htmlFor="available">Available</label>
        <div className="uk-form-controls">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.isAvailable}
            name="isAvailable"
            className="uk-checkbox"
            id="available"
            type="checkbox"/>
        </div>
      </div>

      <div className="uk-width-1-1">
        <label className="uk-form-label" htmlFor="Category">Category</label>
        <div className="uk-form-controls">
          <select
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bType}
            name="bType"
            className="uk-select"
            id="Category"
          >
            <option>UFC</option>
            <option>Wrestling</option>
            <option>Boxing</option>
            <option>BasketBall</option>
            <option>Chess</option>
          </select>
        </div>
      </div>

      <div className="uk-width-1-1">
        <label className="uk-form-label" htmlFor="Category">Description</label>
        <div className="uk-form-controls">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            name="description"
            className="uk-input"
            id="Category"
            type="text" placeholder="Some text..."/>
        </div>
      </div>
      </>}
    </div>
    <div className="uk-modal-footer uk-text-right">
      <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
      <button className="uk-button uk-button-primary" type="submit">Create</button>
    </div>
  </form>

  </div>
</div>
</>);

const withForm =  withFormik({
  mapPropsToValues: () => ({
    par1: '',
    par2: '',
    closeTIMESTAMP: new Date(),
    isAvailable: false,
    description: '',
    bType: '',
  }),

  // // Custom sync validation
  // validate: values => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }

  //   return errors;
  // },

  handleSubmit: (values, { props: {createBet} }) => {
    createBet(values);
  },

  displayName: 'CreateBet',
})(CreateBet);

export default enhancers.redux(withForm);

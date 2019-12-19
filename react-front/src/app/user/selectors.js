import { createSelector } from 'reselect';
import * as constants from './constants';

const getUser = state => state[constants.NAME];

export const makeErrorSelector = (feature) => {
  return createSelector(getUser, ({ errors }) => errors[feature])
}

export const makeLoadingSelector = (feature) => {
  return createSelector(getUser, ({ loader }) => loader[feature])
}

/*__ADD_SELECTORS__*/
import { createSelector } from 'reselect';
import * as constants from './constants';

const getUser = state => state[constants.NAME];

export const makeErrorSelector = (feature) => {
  return createSelector(getUser, ({ errors }) => errors[feature])
}

export const makeLoadingSelector = (feature) => {
  return createSelector(getUser, ({ loader }) => loader[feature])
}

export const getMyBets = createSelector(getUser, a => a.myBets)

/*__ADD_SELECTORS__*/
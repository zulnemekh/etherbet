import { createSelector } from 'reselect';
import * as constants from './constants';

const getBets = state => state[constants.NAME];
export const makeLoadingSelector = feature => {
  return createSelector(getBets, ({ loaders }) => loaders[feature])
}
export const getLoader = createSelector(getBets, ({loader}) => loader);
export const getBetList = createSelector(getBets, bet => bet.betList);
/*__ADD_SELECTORS__*/
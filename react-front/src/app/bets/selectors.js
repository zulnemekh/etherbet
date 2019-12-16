import { createSelector } from 'reselect';
import * as constants from './constants';

const getBets = state => state[constants.NAME];
export const makeLoadingSelector = feature => {
  return createSelector(getBets, ({ loaders }) => loaders[feature])
}
export const getLoader = createSelector(getBets, ({loader}) => loader);
export const getBetList = createSelector(getBets, ({ betList }) => {
  return (betList || []).sort((b, a) => parseInt(a.expiryDate) - parseInt(b.expiryDate))
});
export const getSelectedBet = createSelector(getBets, bets => bets.selectedBet);
/*__ADD_SELECTORS__*/
import { createSelector } from 'reselect';
import * as constants from './constants';

const getBets = state => state[constants.NAME];
export const getLoader = createSelector(getBets, ({loader}) => loader);
/*__ADD_SELECTORS__*/
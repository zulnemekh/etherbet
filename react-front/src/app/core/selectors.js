import { createSelector } from 'reselect';
import * as constants from './constants';

export const getCore = state => state[constants.NAME];

export const getProfile = createSelector(getCore, core => core.profile);
/*__ADD_SELECTORS__*/
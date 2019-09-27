import {all, fork} from 'redux-saga/effects';
import core from './core';
import bets from './bets';
/*__IMPORT_MODULE__*/

const sagas = [
	...core.sagas,
	...bets.sagas,
/*__IMPORT_SAGAS__*/
];

 export default function* root() {
  yield all(sagas
    .map(saga => fork(saga))
  );
};
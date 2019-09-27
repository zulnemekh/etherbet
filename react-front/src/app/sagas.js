import {all, fork} from 'redux-saga/effects';
/*__IMPORT_MODULE__*/

const sagas = [
/*__IMPORT_SAGAS__*/
];

 export default function* root() {
  yield all(sagas
    .map(saga => fork(saga))
  );
};
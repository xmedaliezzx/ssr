import { Injectable, inject } from '@angular/core';
import { AppStateInterface } from '..';
import { Store } from '@ngrx/store';
import { STOP_LOADING } from './global.action';

@Injectable()
export class GlobalFacadeService {
  _store = inject(Store<AppStateInterface>);

  constructor() {
    // console.log('GlobalFacadeService');
  }

  stopLoading() {
    this._store.dispatch(STOP_LOADING());
  }
}

import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './global.state';
import * as fromGLOBAL from './global.action';

export const initialState: GlobalState = {
  isAppLoading: true,
  language: '',
  localisation: {
    lat: 0,
    lng: 0,
  },
};

export const globalReducer = createReducer(
  initialState,
  on(fromGLOBAL.START_LOADING, (state) => ({
    ...state,
    isAppLoading: true,
  })),
  on(fromGLOBAL.STOP_LOADING, (state) => ({
    ...state,
    isAppLoading: false,
  })),
  on(fromGLOBAL.SET_LOCALISATION, (state, { localisation }) => ({
    ...state,
    localisation: localisation,
  })),
);

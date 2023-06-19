import { createAction,props } from '@ngrx/store';
import { Localisation } from './global.state';

export const START_LOADING = createAction('[LOADING] START');
export const STOP_LOADING = createAction('[LOADING] STOP');

export const SET_LANGUAGE = createAction('[LANGUAGE] SET', props<{ language: string }>());

// Localisation
export const SET_LOCALISATION = createAction('[Localisation] SET Localisation', props<{ localisation: Localisation }>());

export default {
  START_LOADING,
  STOP_LOADING,
  SET_LANGUAGE
};

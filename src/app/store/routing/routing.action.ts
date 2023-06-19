
import { createAction, props } from '@ngrx/store';

export const REDIRECT = createAction('[ROUTING] Redirect',
  props<{ path: string }>());



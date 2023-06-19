import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.state';

export const GlobalFeatureSelector =
  createFeatureSelector<GlobalState>('globalReducer');

export const isAppLoading = createSelector(GlobalFeatureSelector, (c) => c.isAppLoading);
export const getLanguage = createSelector(GlobalFeatureSelector, (c) => c.language);
export const getLocalisation = createSelector(GlobalFeatureSelector, (c) => c.localisation);


import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const UserFeatureSelector =
  createFeatureSelector<UserState>('userReducer');

export const isAppLoading = createSelector(UserFeatureSelector, (c) => c.isAppLoading);
export const getAuthenticatedUser = createSelector(UserFeatureSelector, (c) => c.user);
export const getAccessToken = createSelector(UserFeatureSelector, (c) => c.access_token);
export const getRefreshToken = createSelector(UserFeatureSelector, (c) => c.refresh_token);
export const getTokenUrlFromEmail = createSelector(UserFeatureSelector, (c) => c.token_email);
export const getIdUrlFromEmail = createSelector(UserFeatureSelector, (c) => c.id_email);
export const activeInterfaceSelector = createSelector(UserFeatureSelector, (c) => c.activeInterface)
export const GetTypePrestataire = createSelector(UserFeatureSelector, (c) => c.typePrestataire)


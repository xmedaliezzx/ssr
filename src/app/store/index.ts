export * from './app.state';
export * from './counter/counter.state';
export * from './dialog/dialog.state';
export * from './global/global.state';
export * from './appointment/rdv.state';


import { routerReducer } from '@ngrx/router-store';
import { dialogReducer } from './dialog/dialog.reducer';
import { globalReducer } from './global/global.reducer';
import { userReducer } from './user/user.reducer';
import { UserEffects } from './user/user.effects';
import { RoutingEffects } from './routing/routing.effects';
import { rdvReducer } from './appointment/rdv.reducer';
import { AppointementEffects } from './appointment/rdv.effects';



export const REDUCERS = {
  router: routerReducer,
  dialogReducer: dialogReducer,
  userReducer: userReducer,
  globalReducer: globalReducer,
  rdvReducer: rdvReducer
};

export const EFFECTS = [UserEffects, RoutingEffects, AppointementEffects];
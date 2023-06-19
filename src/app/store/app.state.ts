import { RouterState } from "@ngrx/router-store";
import { DialogState } from "./dialog/dialog.state";
import { GlobalState } from "./global/global.state";
import { UserState } from "./user/user.state";
import { RDVState } from "./appointment/rdv.state";

export interface AppStateInterface {
  RouterState : RouterState;
  DialogState: DialogState;
  GlobalState: GlobalState;
  UserState: UserState;
  RDVState : RDVState
}

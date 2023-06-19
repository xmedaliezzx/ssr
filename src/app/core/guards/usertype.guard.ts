import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { map } from "rxjs";
import { GeneralService } from "src/app/shared/services/general.service";

export const UserTypeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(GeneralService).canActivate();
};

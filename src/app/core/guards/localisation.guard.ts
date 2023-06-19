import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from '@angular/router';
import { RoutesConstants } from '@core/constants/routes.constants';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { getLocalisation } from '@store/global/global.selector';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocalisationGuard implements CanActivate {
  _router = inject(Router);
  _store = inject(Store<AppStateInterface>);

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLocationAuthorization();
  }

  checkLocationAuthorization(): Observable<boolean> {
    return this._store.select(getLocalisation).pipe(
      map((data) => {
        if (data.lat && data.lng) return true;
        else {
          this._router.navigate([RoutesConstants.home.route]);
          return false;
        }
      })
    );
  }
}

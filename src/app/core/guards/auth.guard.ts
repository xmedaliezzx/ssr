import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { GeneralService } from '@shared/services/general.service';
import { AppStateInterface } from '@store/app.state';
import { getAccessToken } from '@store/user/user.selector';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NgAuthGuard implements CanActivate {
  _generalServices = inject(GeneralService);
  _router = inject(Router);
  _store = inject(Store<AppStateInterface>);

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this._store.select(getAccessToken).pipe(
      map((data) => {
        if (data) return true;
        else {
          this._router.navigate(['/auth/signin']);
          return false;
        }
      })
    );
  }
}

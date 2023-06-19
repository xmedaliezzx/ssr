import { Component, Inject, PLATFORM_ID, Type, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from './store';
import { GeneralService } from './shared/services/general.service';
import { isAppLoading } from '@store/global/global.selector';
import {
  GLOBAL_FACADE,
  SOCKET_SERVICE,
} from '@core/constants/tokens.constants';
import { tokenPersist } from '@store/user/user.action';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _general = inject(GeneralService);
  _global = inject(GLOBAL_FACADE);
  _store = inject(Store<AppStateInterface>);
  _socket = inject(SOCKET_SERVICE);
  isAppLoading$$ = this._store.select(isAppLoading);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.PersistToken();
  }
  ngOnInit() {
    this.splash();
  }
  splash() {

      if (isPlatformBrowser(this.platformId)) {    
    window.addEventListener('load', () => {
      this._global.stopLoading();
    });
  }
  }

  PersistToken() {
    if (isPlatformBrowser(this.platformId)) {
      const access_token = localStorage.getItem('access_token') as string;
      const refresh_token = localStorage.getItem('refresh_token') as string;
      access_token && refresh_token
        ? this._store.dispatch(tokenPersist({ access_token, refresh_token }))
        : null;
    }
  }
}

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppStateInterface } from '@store/app.state';
import { SET_LANGUAGE, SET_LOCALISATION } from '@store/global/global.action';
import { getLanguage } from '@store/global/global.selector';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  filter,
  map,
  of,
} from 'rxjs';
import { GET_NEW_TOKEN_API } from '@core/constants/api.constants';
import {
  KEYS,
  storageGetItem,
  storageRemoveAccessToken,
  storageRemoveItem,
  storageSetItem,
} from './storage';
import { GET_INFORMATION_BY_ID_API } from '@core/constants/api.constants';
import { setUserInfo, tokenPersist } from '@store/user/user.action';
import { User } from '@models/user.model';
import { Localisation } from './interfaces/localisation.interface';
import { UserService } from './user.service';
import { setFamilyMembers } from '@store/appointment/rdv.action';
import { PLATFORM_ID, Inject } from '@angular/core';

export const AccessTokenLocalStorage = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private renderer!: Renderer2;

  _translate = inject(TranslateService);
  _http = inject(HttpClient);
  _router = inject(Router);
  _store = inject(Store<AppStateInterface>);
  _user = inject(UserService);
  appLanguage: Observable<string> = this._store.select(getLanguage);
  data = new BehaviorSubject<string>('');
  name: BehaviorSubject<string> = new BehaviorSubject<any>('one');
  asyncLocalisation$: BehaviorSubject<Localisation> =
    new BehaviorSubject<Localisation>({ lat: 0, lng: 0 });
  private subscription: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: any,rendererFactory: RendererFactory2, private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
      // Code that requires the document object

    this.renderer = rendererFactory.createRenderer(null, null);
    this.renderer.setAttribute(
      document.body,
      'dir',
      this._translate.currentLang === 'ar' ? 'rtl' : 'ltr'
    );
    this.setDefaultLang('fr');
    this.changeLang(storageGetItem('lang') || 'fr');
    this.detectRTL();
    // setTimeout(() => {
    //   this.changeLang('ar');
    // }, 3000);
    // console.log('GeneralService-----------------------------------------------'  );

    // Localisation subscription
    this.setLocalisation();
    this.subscription = this.asyncLocalisation$.subscribe((localisation) => {
      // console.log('<<<<< localisation has been changed >>>>>>> ', localisation);
      this._store.dispatch(SET_LOCALISATION({ localisation }));
    });
    // this.periodicallyGetLocation();
  }
  }

  canActivate(): Observable<boolean> {
    return this._http.get('http://localhost:3000').pipe(
      map((data) => {
        return true;
      }),
      catchError((err: any) => {
        this._router.navigate(['prestataire']);
        return of(true);
      })
    );
  }

  setDefaultLang(lang: string) {
    this._translate.setDefaultLang(lang);
  }
  changeLang(lang: string) {
    this._store.dispatch(SET_LANGUAGE({ language: lang }));
  }

  detectRTL() {
    this.appLanguage.pipe(filter((lang) => !!lang)).subscribe((lang) => {
      this._translate.use(lang);
      storageSetItem('lang', lang);
      lang === 'ar'
        ? this.renderer.setAttribute(document.body, 'dir', 'rtl')
        : this.renderer.setAttribute(document.body, 'dir', 'ltr');
    });
  }

  logout() {
    // remove user from local storage to log user out
    storageRemoveAccessToken();
    this.router.navigate(['/auth/signin']);
  }

  getUserInfo() {
    const user_id = storageGetItem(KEYS.USER_ID);
    // // console.log(user_id);
    this._http.get(GET_INFORMATION_BY_ID_API + user_id).subscribe({
      next: (res: any) => {
        this._store.dispatch(setUserInfo({ user: res.data.user }));
      },
      error: (err) => {
        // console.log(err);
      },
      complete: () => {
        // console.log('complete');
      },
    });
    this._user.getFamilyMembers(user_id).subscribe({
      next: (res: any) => {
        this._store.dispatch(setFamilyMembers({ family_members: res.data }));
      },
      error: (err) => {
        // console.log(err);
      },
      complete: () => {},
    });
  }

  // Location Service
  setLocalisation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          navigator.geolocation.getCurrentPosition((position) => {
            this.asyncLocalisation$.next({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          });
          permissionStatus.onchange = () => {
            if (permissionStatus.state === 'denied') {
              this.asyncLocalisation$.next({ lat: 0, lng: 0 });
            } else {
              navigator.geolocation.getCurrentPosition((position) => {
                this.asyncLocalisation$.next({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              });
            }
          };
        });
    } else {
      // console.log('Geolocation is not supported by this browser.');
    }
  }

  getPermissionOnchange() {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((permissionStatus) => {
        permissionStatus.onchange = () => {
          if (permissionStatus.state === 'denied') {
            this.asyncLocalisation$.next({ lat: 0, lng: 0 });
          } else {
            navigator.geolocation.getCurrentPosition((position) => {
              this.asyncLocalisation$.next({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            });
          }
        };
      });
  }

  periodicallyGetLocation() {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        this.getCurrentGeolocation()
          .then((position: any) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // console.log('Latitude:', latitude);
            // console.log('Longitude:', longitude);
            this.asyncLocalisation$.next({ lat: latitude, lng: longitude });
          })
          .catch((error) => {
            console.error(
              'Error occurred while retrieving geolocation:',
              error
            );
            this.asyncLocalisation$.next({ lat: 0, lng: 0 });
            navigator.permissions.query({ name: 'geolocation' });
          });
      }
    }, 5000);
  }

  getCurrentGeolocation() {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            resolve(position);
          },
          function (error) {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported in this browser.'));
      }
    });
  }

  unsubscribeFromSubject(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

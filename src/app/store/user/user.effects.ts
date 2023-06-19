import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { AUTH_SERVICE } from '@core/constants/tokens.constants';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as _userAction from './user.action';
import { catchError, mergeMap, of, switchMap } from 'rxjs';
import { LoginResDTO } from '@DTOs/responses/login-res.dto';
import { LoginReqDTO } from '@DTOs/requests/login-req.dto';
import { REDIRECT } from '@store/routing/routing.action';
import { KEYS } from '@shared/services/storage';
import { storageSetItem } from '@shared/services/storage';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from '@shared/services/general.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class UserEffects {
  _authService = inject(AUTH_SERVICE);
  _toastr = inject(MessageService);
  _translate = inject(TranslateService);
  _general = inject(GeneralService);
  constructor(private actions$: Actions,@Inject(PLATFORM_ID) private platformId: any) {}

  SignIn = createEffect(() =>
    this.actions$.pipe(
      ofType(_userAction.signIn),
      mergeMap(({ signInForm }) =>
        this._authService.signin(signInForm as LoginReqDTO).pipe(
          switchMap((res: LoginResDTO) => {
            if (isPlatformBrowser(this.platformId)) {
            storageSetItem(KEYS.ACCESS_TOKEN, res.data.access_token);
            storageSetItem(KEYS.REFRESH_TOKEN, res.data.refresh_token);
            storageSetItem(KEYS.USER_ID, res.data.user._id);
            this._translate
              .get('AUTH_FEATURES.SIGNIN.SIGN_IN_SUCCESS')
              .subscribe((message: string) => {
                this._toastr.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: message,
                });
              })
              .unsubscribe();
            return of(
              _userAction.signInSuccess({
                user: res.data.user,
                access_token: res.data.access_token,
                refresh_token: res.data.refresh_token,
              }),
              REDIRECT({ path: '/' })
            );
          }
          else{
            return of()
          }
          }),
          catchError((err) => {
            this._toastr.add({
              severity: 'error',
              summary: 'Success',
              detail: err.error.message,
            });
            return of(_userAction.signInFailure({ error: err }));
          })
        )
      )
    )
  );



  GetUserInfo = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(_userAction.tokenPersist),
        mergeMap(() => {
          // console.log('tokenPersist');
          
          this._general.getUserInfo();
          return of()
        })
      );
    },
    { dispatch: false }
  );
}

// storageSetItems({
//     user_id: res.data.user._id,
//     access_token: res.data.access_token,
//     refresh_token: res.data.refresh_token,
//   });

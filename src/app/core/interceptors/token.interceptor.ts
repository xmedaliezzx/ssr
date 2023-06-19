import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  combineLatest,
  Observable,
  retry,
  switchMap,
  throwError,
} from 'rxjs';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { getAccessToken, getRefreshToken } from '@store/user/user.selector';
import { GET_NEW_TOKEN_API } from '@core/constants/api.constants';
import { Router } from '@angular/router';
import { tokenPersist } from '@store/user/user.action';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  _store = inject(Store<AppStateInterface>);
  _http = inject(HttpClient);
  _router = inject(Router);
  user_id: string = '';
  accessToken: string = '';
  refreshToken: string = '';
  tokens: Observable<string>[] = [
    this._store.select(getAccessToken),
    this._store.select(getRefreshToken),
  ];
  constructor() {
    this.initializeTokens();
  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.accessToken) {
      const req = request.clone({
        setHeaders: {
          Authorization: this.accessToken,
        },
      });
      return next.handle(req).pipe(
        // retry(3), this retry is for the request itself
        catchError((err: HttpErrorResponse) => {
          if (err.status === 402) {
            return this._http
              .post(GET_NEW_TOKEN_API + this.refreshToken, {})
              .pipe(
                retry(3),
                switchMap((res: any) => {
                  this.accessToken = res.data.access_token;
                  this.refreshToken = res.data.refresh_token;
                  localStorage.setItem('access_token', res.data.access_token);
                  localStorage.setItem('refresh_token', res.data.refresh_token);
                  this._store.dispatch(
                    tokenPersist({
                      access_token: res.data.access_token,
                      refresh_token: res.data.refresh_token,
                    })
                  );
                  const req = request.clone({
                    setHeaders: {
                      Authorization: this.accessToken,
                    },
                  });
                  return next.handle(req);
                }),
                catchError((err: HttpErrorResponse) => {
                  localStorage.clear();
                  window.location.reload();
                  return throwError(() => err);
                })
              );
          } else {
            return throwError(() => err);
          }
        })
      );
    } else {
      return next.handle(request);
    }
  }

  initializeTokens() {
    combineLatest(this.tokens).subscribe(
      ([accessToken, refreshToken]): boolean[] | void => {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
      }
    );
  }
}

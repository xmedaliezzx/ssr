import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as _ from './routing.action'
import { Router } from '@angular/router';

@Injectable()
export class RoutingEffects {
    actions$ = inject(Actions)
    _router = inject(Router)
    constructor() { }


    REDIRECT = createEffect(() => {
        return this.actions$.pipe(
            ofType(_.REDIRECT),
            map(({ path }) => {
                this._router.navigate([path])
            })
        )
    }, { dispatch: false }
    )

}

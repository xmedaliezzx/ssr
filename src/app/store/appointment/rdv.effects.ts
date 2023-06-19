import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as _appointementAction from './rdv.action';
import { mergeMap, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { GeneralService } from '@shared/services/general.service';
import { SocketRdvReqDTO } from '@DTOs/requests/socket-rdv-req.dto';
import { rdvDataSelector } from './rdv.selector';
import { AppStateInterface } from '..';
import { Store } from '@ngrx/store';
import { SOCKET_SERVICE } from '@core/constants/tokens.constants';
import { notFalsy } from '@helpers/notfalsy';

@Injectable()
export class AppointementEffects {
  _toastr = inject(MessageService);
  _translate = inject(TranslateService);
  _general = inject(GeneralService);
  _store = inject(Store<AppStateInterface>);
  _socket = inject(SOCKET_SERVICE);
  _actions$ = inject(Actions);
  rdvFields: SocketRdvReqDTO;

  constructor() {
    this._store.select(rdvDataSelector).subscribe((selectData) => {
      // // console.log('selectData : ', selectData);
      this.rdvFields = {
        typePrestataire: 'infermier',
        date: selectData.date,
        gender: selectData.choix_professionnel,
        type: selectData.garde,
        category: selectData.category,
        souscategory: selectData.souscategory,
        ordonnance: notFalsy(selectData.ordonnance) ,        
      }
      // // console.log('rdvFields : ', this.rdvFields);
    }
    )
  }

  setDataInFinalStep = createEffect(() =>
    this._actions$.pipe(
      ofType(_appointementAction.finalStepAction),
      mergeMap((data) => {
        if (!data) {
          return of(_appointementAction.createAppointementFailure({ error: 'error' }));
        }
        else {
          return of(_appointementAction.createAppointement());
        }
      })
    )
  );

  createAppointement = createEffect(() =>
    this._actions$.pipe(
      ofType(_appointementAction.createAppointement),
      mergeMap(async () => {
        // this._socket.sendRdv(this.rdvFields);
      })
    ),
    { dispatch: false }
  );


}

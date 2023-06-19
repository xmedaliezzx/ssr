import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE, OPEN } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { AppStateInterface } from '@store/app.state';
import { deactivationConfirmationModal$$, deactivationReasonModal$$ } from '@store/dialog/dialog.selector';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { USER_SERVICE } from '@core/constants/tokens.constants';
import { DeactivateAccountResDTO } from '@DTOs/responses/deactivate-account-res.dto';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-deactivation-confirmation',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule, DialogModule, InputTextareaModule, ButtonModule],
  templateUrl: './deactivation-confirmation.component.html',
  styleUrls: ['./deactivation-confirmation.component.scss']
})
export class DeactivationConfirmationComponent implements OnInit {
  _userService = inject(USER_SERVICE)
  _toastr = inject(MessageService);
  // deactivationConfirmationModal$$: Observable<boolean> = this.store.select(deactivationConfirmationModal$$);
  // observables: Observable<boolean>[] = [
  //   this.deactivationConfirmationModal$$,
  // ]
  // deactivationConfirmationModal: boolean = false

  selectedReason: any = null;
  checked: string = "";
  reasons: any[] = [
    'Je ne trouve pas aawinni utiles',
    'Je ne trouve pas aawinni utiles',
    'Je ne trouve pas aawinni utiles',
    'Je ne trouve pas aawinni utiles',
    'Je ne trouve pas aawinni utiles',
    'Je ne trouve pas aawinni utiles',
    'Je ne trouve pas aawinni utiles',
    'Autre, merci de préciser :'
  ];
  constructor(private store: Store) {

  }


  ngOnInit() {
    this.selectedReason = this.reasons[1];

  }
  open(dialogName: string) {
    this.store.dispatch(OPEN({ dialogName: dialogName }));
  }
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
  Annuler() {
    this.close('deactivationConfirmationModal')
    this.open('deactivationReasonModal')
  }






  onSubmit() {

    this._userService.deactivateAccount().subscribe({
      next: (data: DeactivateAccountResDTO) => {
        if (data && data.success) {
          // // console.log('desactivé');
          this.close('deactivationConfirmationModal')
          this._toastr.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Your account has been deactivated successfully',
          });

          setTimeout(() => {
            localStorage.clear();
            window.location.reload();
          }, 1000);
        }
      },
      error: (err) => {
        // // console.log('error', err);
        this._toastr.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
      },
      complete: () => {

        // console.log('<<< complete >>>')
      }
    })
  }

}

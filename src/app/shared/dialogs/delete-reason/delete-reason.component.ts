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
import { DeactivationConfirmationComponent } from '../deactivation-confirmation/deactivation-confirmation.component';
import { DeleteAccountResDTO } from '@DTOs/responses/delete-account-res.dto';
import { USER_SERVICE } from '@core/constants/tokens.constants';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-delete-reason',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule, DialogModule,InputTextareaModule,ButtonModule, DeactivationConfirmationComponent],
  templateUrl: './delete-reason.component.html',
  styleUrls: ['./delete-reason.component.scss']
})
export class DeleteReasonComponent implements OnInit {
  _userService = inject(USER_SERVICE)
  _toastr = inject(MessageService);
  // deactivationConfirmationModal$$ : Observable<boolean> = this.store.select(deactivationConfirmationModal$$);
  // deactivationReasonModal$$ : Observable<boolean> = this.store.select(deactivationReasonModal$$);
  // observables: Observable<boolean>[] = [
  //   this.deactivationConfirmationModal$$,
  //   this.deactivationReasonModal$$,
  // ]
  // deactivationConfirmationModal :boolean =false
  // deactivationReasonModal :boolean =false

  
  destroy$: Subject<boolean> = new Subject<boolean>();

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
// this.initialize()
  }


  ngOnInit() {
    this.selectedReason = this.reasons[1];
}

// initialize() {
//   combineLatest(this.observables)
//     .pipe(takeUntil(this.destroy$))
//     .subscribe(([deactivationConfirmationModal$$]): boolean[] | void => {
//       this.deactivationConfirmationModal = deactivationConfirmationModal$$;
//     });
// }
open(dialogName: string) {
  // console.log('popup')
  this.store.dispatch(OPEN({ dialogName: dialogName }));
}


close(dialogName: string) {
  // console.log(dialogName);
  
  this.store.dispatch(CLOSE({ dialogName: dialogName }));
}



supprimer(){

  this._userService.deleteAccount(this.selectedReason).subscribe({
    next: (data: DeleteAccountResDTO) => {
      if (data && data.success) {
        // // console.log('desactivé');
        this.close('deleteAccountModal')
        this._toastr.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Your account has been deleted successfully',
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
  // this.close('deactivationReasonModal');
  // this.open('deactivationConfirmationModal')

 

}
ngOnDestroy(): void {
  this.destroy$.next(true);
  this.destroy$.complete();
}

}

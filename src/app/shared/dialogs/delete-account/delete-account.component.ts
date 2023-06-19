import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLOSE, OPEN } from '@store/dialog/dialog.action';
import { Store } from '@ngrx/store';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { AppStateInterface } from '@store/app.state';
import { deactivationConfirmationModal$$, deactivationReasonModal$$, deleteAccountModal$$ } from '@store/dialog/dialog.selector';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DeactivationConfirmationComponent } from '../deactivation-confirmation/deactivation-confirmation.component';
import { UserService } from '@shared/services/user.service';
import { USER_SERVICE } from '@core/constants/tokens.constants';
import { MessageService } from 'primeng/api';
import { DeleteAccountResDTO } from '@DTOs/responses/delete-account-res.dto';
@Component({
  selector: 'app-delete-account',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule, DialogModule, InputTextareaModule, ButtonModule,],
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {
  _userService = inject(USER_SERVICE)
  _toastr = inject(MessageService);
  deleteAccountModal$$: Observable<boolean> = this.store.select(deleteAccountModal$$);
  observables: Observable<boolean>[] = [
    this.deleteAccountModal$$,

  ]
  deleteAccountModal: boolean = false


  destroy$: Subject<boolean> = new Subject<boolean>();

  checked: string = "";

  constructor(private store: Store) {

  }


  ngOnInit() {

  }

  open(dialogName: string) {
    // console.log('popup')
    this.store.dispatch(OPEN({ dialogName: dialogName }));
  }
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

  deactivate() {
    this.close('deleteAccountModal')
    this.open('deactivationReasonModal')

  }

  onSubmit() {

    this.close('deleteAccountModal');
    this.open('deleteReasonModal');
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { CLOSE, OPEN } from '@store/dialog/dialog.action';
import { ButtonModule } from 'primeng/button';
import { DeactivationReasonComponent } from '@shared/dialogs/deactivation-reason/deactivation-reason.component';
import { DeleteAccountComponent } from '@shared/dialogs/delete-account/delete-account.component';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { FormBuilder } from '@angular/forms';
import { deactivationReasonModal$$, deleteAccountModal$$, deleteReasonModal$$ } from '@store/dialog/dialog.selector';
@Component({
  selector: 'app-manage-account',
  standalone: true,
  imports: [CommonModule,AccordionModule,ButtonModule, DeactivationReasonComponent,
    DeleteAccountComponent,],
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent {
  deactivationReasonModal$$ : Observable<boolean> = this.store.select(deactivationReasonModal$$);
  deleteReasonModal$$ : Observable<boolean> = this.store.select(deleteReasonModal$$);
  deleteAccountModal$$ : Observable<boolean> = this.store.select(deleteAccountModal$$);
  destroy$: Subject<boolean> = new Subject<boolean>();
  observables: Observable<boolean>[] = [
    this.deactivationReasonModal$$,
    this.deleteReasonModal$$,
    this.deleteAccountModal$$,
  ]
  deactivationReasonModal :boolean =false
  deleteReasonModal :boolean =false
  deleteAccountModal :boolean =false
  _store = inject(Store<AppStateInterface>);
  constructor(private _route:Router,private store: Store<AppStateInterface>) {
    this.initialize();
  }
  initialize() {
    combineLatest(this.observables)
      .pipe(takeUntil(this.destroy$))
      .subscribe(([deactivationReasonModal$$,deleteReasonModal$$,deleteAccountModal$$]): boolean[] | void => {
        this.deactivationReasonModal = deactivationReasonModal$$;
        this.deleteReasonModal = deleteReasonModal$$;
        this.deleteAccountModal = deleteAccountModal$$;
        
      });
  }
  open(dialogName: string) {
    this.store.dispatch(OPEN({ dialogName: dialogName }));
  }
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
  retour() {
    this._route.navigate(['/profile/Profil']);
  }
}

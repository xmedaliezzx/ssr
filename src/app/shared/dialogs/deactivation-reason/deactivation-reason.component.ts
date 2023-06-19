import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-deactivation-reason',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule, DialogModule,InputTextareaModule,ButtonModule, DeactivationConfirmationComponent],
  templateUrl: './deactivation-reason.component.html',
  styleUrls: ['./deactivation-reason.component.scss']
})
export class DeactivationReasonComponent implements OnInit {
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



deactivate(){
  this.close('deactivationReasonModal');
  this.open('deactivationConfirmationModal')

 

}
ngOnDestroy(): void {
  this.destroy$.next(true);
  this.destroy$.complete();
}

}

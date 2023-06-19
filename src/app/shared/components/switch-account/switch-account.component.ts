import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { ACTIVE_INTERFACE } from '@store/user/user.state';
import { activeInterfaceSelector } from '@store/user/user.selector';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { OpenPatient, OpenPrestataire } from '@store/user/user.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './switch-account.component.html',
  styleUrls: ['./switch-account.component.scss'],
})
export class SwitchAccountComponent {
  _store = inject(Store<AppStateInterface>);
  destroy$: Subject<boolean> = new Subject<boolean>();
  activeInterface: ACTIVE_INTERFACE;
  activeInterfaceSelector = this._store.select(activeInterfaceSelector);
  switchPlan: ACTIVE_INTERFACE;
  constructor(private _route:Router,@Inject(PLATFORM_ID) private platformId: any){}
  ngOnInit(): void {

    this.activeInterfaceSelector
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeInterface: ACTIVE_INTERFACE) => {
        this.activeInterface = activeInterface;
      });
      if (isPlatformBrowser(this.platformId)) {  
        this.switchPlan = localStorage.getItem('ACTIVE_INTERFACE')
        ? (localStorage.getItem('ACTIVE_INTERFACE') as ACTIVE_INTERFACE)
        : ACTIVE_INTERFACE.PATIENT;
      }

  }
  onChange(e: any) {
    localStorage.setItem('ACTIVE_INTERFACE', e.target.value)
    this.switchPlan = e.target.value;
    if (e.target.value == ACTIVE_INTERFACE.PATIENT) {
      this._store.dispatch(OpenPatient());
      this._route.navigate(['/home']);
      // action to change the value in redux state
    }
    if (e.target.value == ACTIVE_INTERFACE.PRESTATAIRE) {
      this._store.dispatch(OpenPrestataire());
       this._route.navigate(['/dashboard']);
        // action to change the value in redux state
    }
  }
}

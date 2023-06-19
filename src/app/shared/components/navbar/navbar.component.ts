import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '@store/app.state';
import { Observable, Subject, combineLatest, map, takeUntil } from 'rxjs';
import { getLanguage } from '@store/global/global.selector';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  activeInterfaceSelector,
  getAccessToken,
  getAuthenticatedUser,
} from '@store/user/user.selector';
import { AvatarModule } from 'primeng/avatar';
import { User } from '@models/user.model';
import { SwitchAccountComponent } from '../switch-account/switch-account.component';
import { ACTIVE_INTERFACE } from '@store/user/user.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
    SwitchAccountComponent,
    TranslateModule,
    SidebarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  _store = inject(Store<AppStateInterface>);
  language: Observable<string> = this._store.select(getLanguage);
  destroy$: Subject<boolean> = new Subject<boolean>();
  user: User;
  menu: boolean = false;
  isAthenticated: boolean = false;
  activeInterface: ACTIVE_INTERFACE;
  getAccessToken = this._store.select(getAccessToken);
  getAuthenticatedUser = this._store.select(getAuthenticatedUser);
  activeInterfaceSelector = this._store.select(activeInterfaceSelector);
  constructor() {}

  ngOnInit(): void {
    combineLatest([
      this.getAccessToken,
      this.getAuthenticatedUser,
      this.activeInterfaceSelector,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ([token, user, activeInterface]: [string, User, ACTIVE_INTERFACE]) => {
          this.isAthenticated = !!token;
          this.user = user;
          this.activeInterface = activeInterface;
        }
      );

      this.activeInterfaceSelector
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeInterface: ACTIVE_INTERFACE) => {
        this.activeInterface = activeInterface;
        console.log("Active interface", this.activeInterface)
      });
  }

  menuResponsive() {
    this.menu = !this.menu;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

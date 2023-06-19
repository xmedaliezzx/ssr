import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { RoutesConstants } from '@core/constants/routes.constants';

@Component({
  selector: 'app-check-inbox',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './check-inbox.component.html',
  styleUrls: ['./check-inbox.component.scss']
})
export class CheckInboxComponent {
  signIn_path = RoutesConstants.auth.routeWithSlash + RoutesConstants.signin.routeWithSlash

  _activatedRoute = inject(ActivatedRoute);
  _route = inject(Router);

  email: string = '';
  constructor() {
    this.email = this._activatedRoute.snapshot.params['email']
  }

  goBack() {
    this._route.navigateByUrl(this.signIn_path)
  }

}

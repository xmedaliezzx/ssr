import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AUTH_SERVICE } from '@core/constants/tokens.constants';
import { Router } from '@angular/router';
import { FormComponent } from '@shared/dynamicForm/form/form.component';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';

interface Services {
  [key: string]: any;
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  types = [
    {name:'Paramédical',value:'paramedical'},
    {name:'Doctors',value:'doctors'},
    {name:'Transport Medical',value:'transport_medical'},
    {name:'Parapharmacie',value:'parapharmacie'},
    {name:'Laboratoires d annalyses',value:'laboratoires'},
    {name:'Maison de retraite',value:'maison_retraite'},

    {name:'Garde d enfants',value:'garde_denfants'},
    {name:'Pomp Funèbre',value:'pomp_funebre'},

  ];
  _store = inject(Store<AppStateInterface>);

  _auth = inject(AUTH_SERVICE);
  _route = inject(Router);
  @ViewChild(FormComponent) formComponent!: FormComponent;
  signUpForm: DynamicForm;

  constructor() {


  } 

  chooseType(typeName: string) {
    this._route.navigate([
      '/auth/signup/prestataire/prestataire_type/'+typeName,
    ]);
  
 
    
  }
}

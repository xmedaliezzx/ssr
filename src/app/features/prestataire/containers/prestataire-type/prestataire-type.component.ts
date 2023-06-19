import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';
import { FormComponent } from '@shared/dynamicForm/form/form.component';
import {
  SIGN_UP_PRESTATAIRE_PARAMEDICAL,
  SIGN_UP_PRESTATAIRE_MEDECIN,
  SIGN_UP_PRESTATAIRE_TRANSPORTMEDICAL,
  SIGN_UP_PRESTATAIRE_LABORATOIRES,
  SIGN_UP_PRESTATAIRE_POMPFUNEBRE,
  SIGN_UP_PRESTATAIRE_MAISONRETRAITE,
  SIGN_UP_PRESTATAIRE_PARPHARMACIE,
  SIGN_UP_PRESTATAIRE_BABYSITTING,
} from './prestataire-type.config';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { clearTypePrestataire, setTypePrestataire } from '@store/user/user.action';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prestataire-type',
  standalone: true,
  imports: [CommonModule, FormComponent, FormComponent, RouterModule],
  templateUrl: './prestataire-type.component.html',
  styleUrls: ['./prestataire-type.component.scss'],
})
export class PrestataireTypeComponent implements OnInit {
  @ViewChild(FormComponent) formComponent!: FormComponent;

  _activatedRoute = inject(ActivatedRoute);
  _route = inject(Router);
  type: string;
  signUpForm: DynamicForm;
  _store = inject(Store<AppStateInterface>);

  paramedicalForm = SIGN_UP_PRESTATAIRE_PARAMEDICAL;
  medecinForm = SIGN_UP_PRESTATAIRE_MEDECIN;
  TransportMedicalForm = SIGN_UP_PRESTATAIRE_TRANSPORTMEDICAL;
  parapharmacieForm = SIGN_UP_PRESTATAIRE_PARPHARMACIE;
  maisonRetraiteForm = SIGN_UP_PRESTATAIRE_MAISONRETRAITE;
  laboratoiresForm = SIGN_UP_PRESTATAIRE_LABORATOIRES;
  babysettingForm = SIGN_UP_PRESTATAIRE_BABYSITTING;
  pompFunebreForm = SIGN_UP_PRESTATAIRE_POMPFUNEBRE;
  constructor() {
    this.type = this._activatedRoute.snapshot.params['type'];
    this._store.dispatch(setTypePrestataire({ typePrestataire: this.type }));
  }


  back() {
    this._store.dispatch(clearTypePrestataire());
    this._route.navigate([
      '/auth/signup/prestataire',
    
    ]);
 
 
    
  }
  connecter(){
    this._store.dispatch(clearTypePrestataire());
    this._route.navigate([
      '/auth/signin',
    
    ]);
  }
  ngOnInit(): void {
    switch (this.type) {
      case 'paramedical':
        this.signUpForm = this.paramedicalForm;
        break;
      case 'doctors':
        this.signUpForm = this.medecinForm;
        break;
      case 'transport_medical':
        this.signUpForm = this.TransportMedicalForm;
        break;
      case 'maison_retraite':
        this.signUpForm = this.maisonRetraiteForm;
        break;
      case 'parapharmacie':
        this.signUpForm = this.parapharmacieForm;
        break;
      case 'laboratoires':
        this.signUpForm = this.laboratoiresForm;
        break;
      case 'garde_denfants':
        this.signUpForm = this.babysettingForm;
        break;
      case 'pomp_funebre':
        this.signUpForm = this.pompFunebreForm;
        break;
      default:
        break;
    }
  }
}

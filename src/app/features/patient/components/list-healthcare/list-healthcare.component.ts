import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { BABYSITTING, LABORATOIRES, MAISONRETRAITE, MEDECINS, PARAMEDICAL, PARPHARMACIE, POMPFUNEBRE, TRONSPORTMEDICAL } from '@features/patient/containers/rdv-appointment/rdv-appointment.config';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { selectService, setFinalStep, setService } from '@store/appointment/rdv.action';
import { Router } from '@angular/router';
import { OPEN } from '@store/dialog/dialog.action';

interface Fields {
  [key: string]: boolean;
}
interface Services {
  [key: string]: any;
}

@Component({
  selector: 'app-list-healthcare',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './list-healthcare.component.html',
  styleUrls: ['./list-healthcare.component.scss'],
})
export class ListHealthcareComponent {
  _store = inject(Store<AppStateInterface>);
  _router = inject(Router);
  constructor() {
    this._store.dispatch(selectService({
      formConf: {
        fields: [],
        hasFiles: false,
      }
    }));
    this._store.dispatch(setFinalStep({
      step: 0,
      finalStep: 0,
    }))
  }

  service: Services = {
    infirmier: PARAMEDICAL.infermier,
    technicien_reanimation: PARAMEDICAL.technicien_reanimation,
    aide_soignant: PARAMEDICAL.aide_soignant,
    auxiliaire_vie: PARAMEDICAL.auxiliaire_vie,
    kinesitherapeute: PARAMEDICAL.kinesitherapeute,
    medecin_generaliste: MEDECINS.medecin_generaliste,
    medecin_physique: MEDECINS.medecin_physique,
    medecin_anti_douleur: MEDECINS.medecin_anti_douleur,
    medecin_cardiologue: MEDECINS.medecin_cardiologue,
    medecin_neurologue: MEDECINS.medecin_neurologue,
    medecin_pneumologue: MEDECINS.medecin_pneumologue,
    medecin_pediatre: MEDECINS.medecin_pediatre,
    Transport_medical: TRONSPORTMEDICAL.Transport_medical,
    maison_retraite: MAISONRETRAITE.maison_retraite,
    parapharmacie: PARPHARMACIE.parapharmacie,
    laboratoires: LABORATOIRES.laboratoires,
    baby_sitting: BABYSITTING.baby_sitting,
    pomp_funebre: POMPFUNEBRE.pomp_funebre,
  };
  fields: Fields = {
    ParamedicalSpeciality: false,
    MedecinsSpeciality: false,
    TransportMedicalSpeciality: false,
    MaisonRetraiteSpeciality: false,
    ParapharmacieSpeciality: false,
    LaboratoiresSpeciality: false,
    BabySittingSpeciality: false,
    PompFunebreSpeciality: false,
  };

  ngOnInit() {
    // // console.log('ParamedicalSpeciality',this.fields.ParamedicalSpeciality);
  }
  open(fieldName: string) {
    this.fields[fieldName] = !this.fields[fieldName];
  }

  chooseService(serviceName: string) {
    this._store.dispatch(selectService({ formConf: this.service[serviceName].steps[0] }));
    this._store.dispatch(setService({
      service: this.service[serviceName].steps
    }))
    this._store.dispatch(OPEN({ dialogName: 'soinsChoixModal' }));
    this._store.dispatch(
      setFinalStep({
        step: 0,
        finalStep: this.service[serviceName].final,
      })
    );
  }

  chooseServicesanspop(serviceName: string) {
    this._store.dispatch(selectService({ formConf: this.service[serviceName].steps[0] }));
    this._store.dispatch(setService({
      service: this.service[serviceName].steps
    }))
    this._router.navigate(['/appointment']);
    this._store.dispatch(
      setFinalStep({
        step: 0,
        finalStep: this.service[serviceName].final,
      })
    );
  }
}

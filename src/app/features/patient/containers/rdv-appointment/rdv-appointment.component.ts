import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { Router } from '@angular/router';
import { FormComponent } from '@shared/dynamicForm/form/form.component';
import { DynamicForm } from '@shared/dynamicForm/dynamicform.config';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { BABYSITTING, LABORATOIRES, MAISONRETRAITE, MEDECINS, PARAMEDICAL, PARPHARMACIE, POMPFUNEBRE, TRONSPORTMEDICAL } from './rdv-appointment.config';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import {
  familyMembersSelector,
  finalStepSelector,
  formConf,
  rdvDataSelector,
  serviceSelector,
  stepSelector,
  titleSelector,
  tmpFamilyMemberSelector,
} from '@store/appointment/rdv.selector';
import {
  finalStepAction,
  nextAction,
  previousAction,
  selectService,
  setFinalStep,
  setNewFamilyMember,
} from '@store/appointment/rdv.action';
import { START_LOADING } from '@store/global/global.action';
import { getAuthenticatedUser } from '@store/user/user.selector';
import { PatientformComponent } from '@shared/components/patientform/patientform/patientform.component';
import { filter } from 'rxjs';
import { User } from '@models/user.model';

@Component({
  selector: 'app-rdv-appointment',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarModule,
    NavbarComponent,
    PatientformComponent,
    FormComponent,
  ],
  templateUrl: './rdv-appointment.component.html',
  styleUrls: ['./rdv-appointment.component.scss'],
})
export class RdvAppointmentComponent {
  @ViewChild(FormComponent) formComponent!: FormComponent;
  @ViewChild(FormComponent) PatientformComponent!: PatientformComponent;
  _store = inject(Store<AppStateInterface>);
  autre_patient: any[];
  selectedService: any;
  stepTitle: string = '';
  rdvData: any;
  step: number = 0;
  finalStep: number;
  formData: any;
  userData: any;
  form: DynamicForm;
  progressValue: number = 0;
  title: string = '';
  button: string = '';
  tmp_member: Partial<User>;
  btnDisable: boolean = false;


  infermier = PARAMEDICAL.infermier;
  technicien_reanimation = PARAMEDICAL.technicien_reanimation;
  aide_soignant = PARAMEDICAL.aide_soignant;
  auxiliaire_vie = PARAMEDICAL.auxiliaire_vie;
  kinesitherapeute = PARAMEDICAL.kinesitherapeute;
  medecin_generaliste = MEDECINS.medecin_generaliste;
  medecin_physique = MEDECINS.medecin_physique;
  medecin_anti_douleur = MEDECINS.medecin_anti_douleur;
  medecin_cardiologue = MEDECINS.medecin_cardiologue;
  medecin_neurologue = MEDECINS.medecin_neurologue;
  medecin_pneumologue = MEDECINS.medecin_pneumologue;
  medecin_pediatre = MEDECINS.medecin_pediatre;
  Transport_medical = TRONSPORTMEDICAL.Transport_medical;
  maison_retraite = MAISONRETRAITE.maison_retraite;
  parapharmacie = PARPHARMACIE.parapharmacie;
  laboratoires = LABORATOIRES.laboratoires;
  baby_sitting = BABYSITTING.baby_sitting;
  pomp_funebre = POMPFUNEBRE.pomp_funebre;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.progressValue = 1;
    this.title = 'De qui avez-vous besoin?';
    this.button = 'Annuler';
    this.selectService();
    this.selectRdvData();
    // this.setStoreFinalStep(this.infermier.steps);
    this.selectFamilyMembers();
    this.selectfinalStep();
    this.selectStep();
    this.selectForm();
    this.selectTitle();
    this._store.select(getAuthenticatedUser).subscribe((user) => {
      const data = {
        nom: user.firstname,
        prenom: user.lastname,
      };
      this.userData = data;
    });
  }

  selectForm() {
    this._store
      .select(formConf)
      .pipe(filter((formConf) => !!formConf))
      .subscribe((formConf) => {
        if (formConf.fields.length > 0) {
          this.rdvData = {
            ...this.rdvData,
            ...this.userData,
          };
          const persistedData = formConf.fields.map((field) => {
            const newField = { ...field };
            // if (!!this.rdvData[field.name]) {
            //   newField.value = this.rdvData[field.name];
            // } else {
            //   newField.value = field.value;
            // }
            newField.value = !!this.rdvData[field.name]
              ? this.rdvData[field.name]
              : field.value;
            return newField;
          });
          // // console.log('persistedData', persistedData);

          this.form = { hasFiles: formConf.hasFiles, fields: persistedData };
        }
      });
  }

  selectStep() {
    this._store.select(stepSelector).subscribe((step) => {
      if(step == 0){
        this.btnDisable = true;
      }else this.btnDisable = false;
      this.step = step;
      this.setForm(step);
    });
  }

  selectRdvData() {
    this._store
      .select(rdvDataSelector)
      .pipe()
      .subscribe((rdvData) => {
        this.rdvData = rdvData;
      });
  }

  selectfinalStep() {
    this._store
      .select(finalStepSelector)
      .pipe()
      .subscribe((finalStep) => {
        this.finalStep = finalStep;
      });
  }

  selectTitle() {
    this._store.select(titleSelector)
      .pipe(filter((stepTitle) => !!stepTitle))
      .subscribe((stepTitle) => {
        this.stepTitle = stepTitle || '';
      });
  }

  Suivant() {
    if (this.step == this.finalStep) {
      if (this.tmp_member) {
        this._store.dispatch(setNewFamilyMember({ newMember: this.tmp_member }))
      }
      // this.formComponent.submitForm();
      this._store.dispatch(finalStepAction({ data: this.formData }));
      // this._store.select(tmpFamilyMemberSelector).subscribe(r => {
      //   console.log('new family member: ', r)
      // })
      this._store.dispatch(START_LOADING());
      this._router.navigate(['resultSearch']);
    } else {
      this.formComponent.submitForm();
      this._store.dispatch(nextAction({ data: this.formData }));
    }
  }

  Precedent() {
    if (this.formComponent) {
      if (this.step == 0) {
        alert('Vous êtes déjà au premier pas');
      } else {
        this.formComponent.submitForm();
        this._store.dispatch(previousAction({ data: this.formData }));
      }
    } else {
      this._store.dispatch(previousAction({ data: this.formData }));
    }
  }

  setForm(step: number) {
    this._store.dispatch(
      selectService({ formConf: this.selectedService[step] })
    );
  }

  selectService() {
    this._store.select(serviceSelector).subscribe((service: any) => {
      this.selectedService = service;
    });
  }

  setStoreFinalStep(formArray: any) {
    this._store.dispatch(
      setFinalStep({
        step: PARAMEDICAL.infermier.steps.length - 1,
        finalStep: PARAMEDICAL.infermier.final,
      })
    );
  }

  setFormData(data: any) {
    this.formData = data;
  }

  selectFamilyMembers() {
    this._store.select(familyMembersSelector).subscribe((familyMembers) => {
      this.autre_patient = familyMembers;
    });
  }

  getFinalStepChangements(event?: any) {
    console.log('event: ', event)
    this.tmp_member = event;
  }
}

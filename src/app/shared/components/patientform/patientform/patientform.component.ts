import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {
  familyMembersSelector
} from '@store/appointment/rdv.selector';
import { getAuthenticatedUser } from '@store/user/user.selector';
import { FileUploadModule } from 'primeng/fileupload';

import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { User } from '@models/user.model';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { setExistingFamilyMember } from '@store/appointment/rdv.action';
@Component({
  selector: 'app-patientform',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    CalendarModule,
    RadioButtonModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.scss'],
})
export class PatientformComponent implements OnChanges {
  
  @Output() onchange = new EventEmitter();

  autre_patient: any[];
  ouiChoix: string = 'oui';
  patient: string;
  date: Date;
  choix: any[] = ['homme', 'femme'];
  show: false;
  disableInput: boolean = true;
  tmp_member: Partial<User>;

  checkedposition: false;
  checkedcondition: true;
  selectedValue: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  user!: User;
  firstname: string;
  familyMembers = [{}];
  userData!: User;
  dropdown!: Partial<User>;
  _store = inject(Store<AppStateInterface>);
  selectedId: any;
  patientMember$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  PersoInfoForm: FormGroup = new FormGroup({
    lastname: new FormControl({ disabled: this.disableInput, value: '' }),
    firstname: new FormControl({ disabled: this.disableInput, value: '' }),
    birthDate: new FormControl({ disabled: this.disableInput, value: this.user?.birthDate }),
    address: new FormControl({ disabled: this.disableInput, value: '' }),
    city: new FormControl({ disabled: this.disableInput, value: '' }),
    phoneNumber: new FormControl({ disabled: this.disableInput, value: '' }),
    ouiChoix: new FormControl(),
    condition: new FormControl(),
  });

  constructor() {
    this.patientMember$.subscribe(value => {
      if (value === 'patientautre') {
        this.PersoInfoForm.reset();
        this.PersoInfoForm.enable();
      }
    })
  }

  ngOnInit() {
    this.dataChangements();
    this.getFamilyMembers();
    this.getUserData();
    this.patienType('patientMoi');
  }

  getFamilyMembers() {
    this._store.select(familyMembersSelector).subscribe((familyMembers) => {
      this.autre_patient = familyMembers.map((patient) => {
        return {
          ...patient,
          fullname: `${patient.firstname} ${patient.lastname}`,
        };
      });
      this.autre_patient = [' ', ...this.autre_patient]
    });
  }

  getUserData() {
    this._store
      .select(getAuthenticatedUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.user = user;
      });
  }
  choixmy(event: any) {
    this.PersoInfoForm.controls['ouiChoix'].setValue(event)
  }
  // this.PersoInfoForm.controls.firstname.setValue(user.firstname);
  // this.PersoInfoForm.controls.lastname.setValue(user.lastname);
  // this.PersoInfoForm.controls.birthDate.setValue(user.birthDate);
  // this.PersoInfoForm.controls.address.setValue(user.address);
  // this.PersoInfoForm.controls.city.setValue(user.city);
  // this.PersoInfoForm.controls.phoneNumber.setValue(user.phoneNumber);

  patienType(patient: string) {
    this.patientMember$.next(patient)
    this.patient = patient;
    if (this.patient == 'patientMoi') {
      this.PersoInfoForm.controls.firstname.setValue(this.user.firstname);
      this.PersoInfoForm.controls.lastname.setValue(this.user.lastname);
      this.PersoInfoForm.controls.birthDate.setValue(this.user.birthDate);
      this.PersoInfoForm.controls.address.setValue(this.user.address);
      this.PersoInfoForm.controls.city.setValue(this.user.city);
      this.PersoInfoForm.controls.phoneNumber.setValue(this.user.phoneNumber);
      this.date = new Date(this.user.birthDate);
    }
    if (this.patient == 'patientautre') {
      this.PersoInfoForm.controls.firstname.setValue(
        this.autre_patient[0]?.firstname
      );
      this.PersoInfoForm.controls.lastname.setValue(
        this.autre_patient[0].lastname
      );
      this.PersoInfoForm.controls.birthDate.setValue(
        this.autre_patient[0].birthDate
      );
      this.PersoInfoForm.controls.address.setValue(
        this.autre_patient[0].address
      );
      this.PersoInfoForm.controls.city.setValue(this.autre_patient[0].city);
      this.PersoInfoForm.controls.phoneNumber.setValue(
        this.autre_patient[0].phoneNumber
      );
      this.date = new Date(
        this.autre_patient[0].birthDate
      ).toLocaleDateString() as any;
    }
  }

  selectFamilymember() {
    if (this.dropdown == null) {
      this.disableInput = false;
      this.PersoInfoForm.reset();
      this.PersoInfoForm.enable();
      // dispatch action
    }
    else {
      this.disableInput = true;
      this.selectedId = this.dropdown._id;
      this._store.dispatch(setExistingFamilyMember({ memberId: this.selectedId }))
      this.PersoInfoForm.controls.firstname.setValue(this.dropdown.firstname);
      this.PersoInfoForm.controls.firstname.disable();
      this.PersoInfoForm.controls.lastname.setValue(this.dropdown.lastname);
      this.PersoInfoForm.controls.lastname.disable();
      this.PersoInfoForm.controls.birthDate.setValue(this.dropdown.birthDate);
      this.PersoInfoForm.controls.birthDate.disable();
      this.PersoInfoForm.controls.address.setValue(this.dropdown.address);
      this.PersoInfoForm.controls.address.disable();
      this.PersoInfoForm.controls.city.setValue(this.dropdown.city);
      this.PersoInfoForm.controls.phoneNumber.setValue(this.dropdown.phoneNumber);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  dataChangements() {
    this.PersoInfoForm.valueChanges.subscribe(obj => {
      this.onchange.emit(obj)
    })
  }
}

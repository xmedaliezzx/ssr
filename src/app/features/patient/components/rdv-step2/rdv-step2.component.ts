import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-rdv-step2',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule,CheckboxModule],
  templateUrl: './rdv-step2.component.html',
  styleUrls: ['./rdv-step2.component.scss']
})
export class RdvStep2Component {
  selectedCities: string[] = [];
  ingredient!: string;
}

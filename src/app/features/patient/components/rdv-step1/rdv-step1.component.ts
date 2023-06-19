import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-rdv-step1',
  standalone: true,
  imports: [CommonModule,RadioButtonModule,FormsModule],
  templateUrl: './rdv-step1.component.html',
  styleUrls: ['./rdv-step1.component.scss']
})
export class RdvStep1Component {
  ingredient!: string;
}

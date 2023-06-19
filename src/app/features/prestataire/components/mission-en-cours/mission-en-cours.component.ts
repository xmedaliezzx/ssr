import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-en-cours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-en-cours.component.html',
  styleUrls: ['./mission-en-cours.component.scss']
})
export class MissionEnCoursComponent {

@Output() finish = new EventEmitter<boolean>(false);

  fini(){
this.finish.emit(true);
  }

}

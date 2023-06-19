import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-you-are',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './you-are.component.html',
  styleUrls: ['./you-are.component.scss']
})
export class YouAreComponent {

}

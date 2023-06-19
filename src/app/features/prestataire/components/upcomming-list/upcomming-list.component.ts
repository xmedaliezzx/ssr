import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { AnimationOptions, LottieModule } from 'ngx-lottie';

@Component({
  selector: 'app-upcomming-list',
  standalone: true,
  imports: [CommonModule, CheckboxModule, LottieModule],
  templateUrl: './upcomming-list.component.html',
  styleUrls: ['./upcomming-list.component.scss']
})
export class UpcommingListComponent {
  options: AnimationOptions = {
    path: '/assets/lottie/Timer.json',
  };
}

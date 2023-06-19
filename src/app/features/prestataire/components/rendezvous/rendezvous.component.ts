import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rendezvous',
  standalone: true,
  imports: [CommonModule, CheckboxModule,RadioButtonModule,FormsModule, LottieModule],
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent {
  free1 : string = 'notfree';
  free2 : string = 'notfree';
  options: AnimationOptions = {
    path: '/assets/lottie/Timer.json',
  };
  ngOnInit() {
    this.free1 = 'not free';
    this.free2 = 'not free';
}
}

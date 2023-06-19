import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CLOSE } from '@store/dialog/dialog.action';

@Component({
  selector: 'app-delete-member',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.scss']
})
export class DeleteMemberComponent {
  constructor(private store: Store) { }

  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }
}

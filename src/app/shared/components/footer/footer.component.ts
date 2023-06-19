import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { GeneralService } from '@shared/services/general.service';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { getLanguage } from '@store/global/global.selector';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    LottieModule,
    DropdownModule,
    FormsModule,
    TreeSelectModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnDestroy {
  options: AnimationOptions = {
    path: '/assets/lottie/arrow.json',
  };
  public _general = inject(GeneralService);
  destroy$: Subject<boolean> = new Subject<boolean>();
  _store = inject(Store<AppStateInterface>);
  selectedLang = { name: '' };
  languages = [{ name: 'ar' }, { name: 'fr' }, { name: 'en' }];

  constructor() {
    this._store
      .select(getLanguage)
      .pipe(
        takeUntil(this.destroy$),
        filter((lang) => !!lang)
      )
      .subscribe((lang) => {
        this.selectedLang = { name: lang };
      });
  }

  changeLang(event: any) {
    this._general.changeLang(event.value.name);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireTypeComponent } from './prestataire-type.component';

describe('PrestataireTypeComponent', () => {
  let component: PrestataireTypeComponent;
  let fixture: ComponentFixture<PrestataireTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestataireTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

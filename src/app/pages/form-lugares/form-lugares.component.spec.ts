import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLugaresComponent } from './form-lugares.component';

describe('FormLugaresComponent', () => {
  let component: FormLugaresComponent;
  let fixture: ComponentFixture<FormLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLugaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

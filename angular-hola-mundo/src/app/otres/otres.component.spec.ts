import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtresComponent } from './otres.component';

describe('OtresComponent', () => {
  let component: OtresComponent;
  let fixture: ComponentFixture<OtresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

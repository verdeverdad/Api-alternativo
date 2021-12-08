import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosDeViajeComponent } from './destinos-de-viaje.component';

describe('DestinosDeViajeComponent', () => {
  let component: DestinosDeViajeComponent;
  let fixture: ComponentFixture<DestinosDeViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinosDeViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinosDeViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

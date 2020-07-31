import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeInicioComponent } from './acerca-de-inicio.component';

describe('AcercaDeInicioComponent', () => {
  let component: AcercaDeInicioComponent;
  let fixture: ComponentFixture<AcercaDeInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDeInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

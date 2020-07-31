import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasSliderComponent } from './noticias-slider.component';

describe('NoticiasSliderComponent', () => {
  let component: NoticiasSliderComponent;
  let fixture: ComponentFixture<NoticiasSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

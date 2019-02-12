import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBlockComponent } from './car-block.component';

describe('CarBlockComponent', () => {
  let component: CarBlockComponent;
  let fixture: ComponentFixture<CarBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

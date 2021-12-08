import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoViewComponent } from './torneo-view.component';

describe('TorneoViewComponent', () => {
  let component: TorneoViewComponent;
  let fixture: ComponentFixture<TorneoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

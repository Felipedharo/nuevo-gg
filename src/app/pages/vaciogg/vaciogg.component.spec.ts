import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacioggComponent } from './vaciogg.component';

describe('VacioggComponent', () => {
  let component: VacioggComponent;
  let fixture: ComponentFixture<VacioggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacioggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacioggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

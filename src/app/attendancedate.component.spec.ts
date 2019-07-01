import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancedateComponent } from './attendancedate.component';

describe('AttendancedateComponent', () => {
  let component: AttendancedateComponent;
  let fixture: ComponentFixture<AttendancedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

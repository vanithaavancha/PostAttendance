import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostattendanceComponent } from './postattendance.component';

describe('PostattendanceComponent', () => {
  let component: PostattendanceComponent;
  let fixture: ComponentFixture<PostattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

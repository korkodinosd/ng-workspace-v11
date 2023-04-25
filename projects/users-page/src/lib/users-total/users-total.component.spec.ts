import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTotalComponent } from './users-total.component';

describe('UsersTotalComponent', () => {
  let component: UsersTotalComponent;
  let fixture: ComponentFixture<UsersTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

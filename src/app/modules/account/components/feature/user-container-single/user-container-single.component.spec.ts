import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContainerSingleComponent } from './user-container-single.component';

describe('UserContainerSingleComponent', () => {
  let component: UserContainerSingleComponent;
  let fixture: ComponentFixture<UserContainerSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContainerSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContainerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

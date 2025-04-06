import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddedUserComponent } from './dialog-added-user.component';

describe('DialogAddedUserComponent', () => {
  let component: DialogAddedUserComponent;
  let fixture: ComponentFixture<DialogAddedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

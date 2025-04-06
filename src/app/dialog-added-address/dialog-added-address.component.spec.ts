import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddedAddressComponent } from './dialog-added-address.component';

describe('DialogAddedAddressComponent', () => {
  let component: DialogAddedAddressComponent;
  let fixture: ComponentFixture<DialogAddedAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddedAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

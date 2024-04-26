import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommentsmodalComponent } from './addcommentsmodal.component';

describe('AddcommentsmodalComponent', () => {
  let component: AddcommentsmodalComponent;
  let fixture: ComponentFixture<AddcommentsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcommentsmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcommentsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

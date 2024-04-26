import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewentrymodalComponent } from './newentrymodal.component';

describe('NewentrymodalComponent', () => {
  let component: NewentrymodalComponent;
  let fixture: ComponentFixture<NewentrymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewentrymodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewentrymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

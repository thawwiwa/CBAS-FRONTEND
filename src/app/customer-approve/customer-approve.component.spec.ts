import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerApproveComponent } from './customer-approve.component';

describe('CustomerApproveComponent', () => {
  let component: CustomerApproveComponent;
  let fixture: ComponentFixture<CustomerApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBreakdownComponent } from './transaction-breakdown.component';

describe('TransactionBreakdownComponent', () => {
  let component: TransactionBreakdownComponent;
  let fixture: ComponentFixture<TransactionBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionBreakdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

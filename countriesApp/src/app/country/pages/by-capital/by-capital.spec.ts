import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapital } from './by-capital';

describe('ByCapital', () => {
  let component: ByCapital;
  let fixture: ComponentFixture<ByCapital>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCapital]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCapital);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

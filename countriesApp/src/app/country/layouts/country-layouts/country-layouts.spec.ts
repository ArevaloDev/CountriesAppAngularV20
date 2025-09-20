import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLayouts } from './country-layouts';

describe('CountryLayouts', () => {
  let component: CountryLayouts;
  let fixture: ComponentFixture<CountryLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLayouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryLayouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

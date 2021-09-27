import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterDetailsComponent } from './charecter-details.component';

describe('CharecterDetailsComponent', () => {
  let component: CharecterDetailsComponent;
  let fixture: ComponentFixture<CharecterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharecterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharecterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

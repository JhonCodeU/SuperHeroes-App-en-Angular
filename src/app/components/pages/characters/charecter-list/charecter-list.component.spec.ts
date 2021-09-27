import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharecterListComponent } from './charecter-list.component';

describe('CharecterListComponent', () => {
  let component: CharecterListComponent;
  let fixture: ComponentFixture<CharecterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharecterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharecterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

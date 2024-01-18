import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TommysComponent } from './tommys.component';

describe('TommysComponent', () => {
  let component: TommysComponent;
  let fixture: ComponentFixture<TommysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TommysComponent]
    });
    fixture = TestBed.createComponent(TommysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

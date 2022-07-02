import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanListComponent } from './roman-list.component';

describe('RomanListComponent', () => {
  let component: RomanListComponent;
  let fixture: ComponentFixture<RomanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

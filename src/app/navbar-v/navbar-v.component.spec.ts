import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVComponent } from './navbar-v.component';

describe('NavbarVComponent', () => {
  let component: NavbarVComponent;
  let fixture: ComponentFixture<NavbarVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

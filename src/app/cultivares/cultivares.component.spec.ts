import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivaresComponent } from './cultivares.component';

describe('CultivaresComponent', () => {
  let component: CultivaresComponent;
  let fixture: ComponentFixture<CultivaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultivaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultivaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasComponent } from './culturas.component';

describe('CulturasComponent', () => {
  let component: CulturasComponent;
  let fixture: ComponentFixture<CulturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

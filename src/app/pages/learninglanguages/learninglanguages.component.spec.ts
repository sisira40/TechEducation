import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearninglanguagesComponent } from './learninglanguages.component';

describe('LearninglanguagesComponent', () => {
  let component: LearninglanguagesComponent;
  let fixture: ComponentFixture<LearninglanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearninglanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearninglanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

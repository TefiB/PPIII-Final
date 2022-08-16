import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditorialComponent } from './addeditorial.component';

describe('AddeditorialComponent', () => {
  let component: AddeditorialComponent;
  let fixture: ComponentFixture<AddeditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

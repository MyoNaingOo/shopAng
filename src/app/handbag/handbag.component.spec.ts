import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbagComponent } from './handbag.component';

describe('HandbagComponent', () => {
  let component: HandbagComponent;
  let fixture: ComponentFixture<HandbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandbagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

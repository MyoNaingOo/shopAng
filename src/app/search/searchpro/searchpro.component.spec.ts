import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproComponent } from './searchpro.component';

describe('SearchproComponent', () => {
  let component: SearchproComponent;
  let fixture: ComponentFixture<SearchproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

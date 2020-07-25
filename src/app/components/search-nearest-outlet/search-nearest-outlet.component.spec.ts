import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNearestOutletComponent } from './search-nearest-outlet.component';

describe('SearchNearestOutletComponent', () => {
  let component: SearchNearestOutletComponent;
  let fixture: ComponentFixture<SearchNearestOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNearestOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNearestOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

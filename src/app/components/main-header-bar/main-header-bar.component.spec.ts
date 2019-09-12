import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderBarComponent } from './main-header-bar.component';

describe('MainHeaderBarComponent', () => {
  let component: MainHeaderBarComponent;
  let fixture: ComponentFixture<MainHeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

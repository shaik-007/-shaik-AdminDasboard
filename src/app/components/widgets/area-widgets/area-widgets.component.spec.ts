import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaWidgetsComponent } from './area-widgets.component';

describe('AreaWidgetsComponent', () => {
  let component: AreaWidgetsComponent;
  let fixture: ComponentFixture<AreaWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

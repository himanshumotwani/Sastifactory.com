import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToJsonComponent } from './convert-to-json.component';

describe('ConvertToJsonComponent', () => {
  let component: ConvertToJsonComponent;
  let fixture: ComponentFixture<ConvertToJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertToJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

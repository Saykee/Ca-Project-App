import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwnedDataComponent } from './pwned-data.component';

describe('PwnedDataComponent', () => {
  let component: PwnedDataComponent;
  let fixture: ComponentFixture<PwnedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwnedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwnedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

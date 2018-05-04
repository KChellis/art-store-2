import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtComponent } from './add-art.component';

describe('AddArtComponent', () => {
  let component: AddArtComponent;
  let fixture: ComponentFixture<AddArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

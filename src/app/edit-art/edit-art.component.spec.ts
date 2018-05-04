import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtComponent } from './edit-art.component';

describe('EditArtComponent', () => {
  let component: EditArtComponent;
  let fixture: ComponentFixture<EditArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

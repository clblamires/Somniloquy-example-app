import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhrasePage } from './add-phrase.page';

describe('AddPhrasePage', () => {
  let component: AddPhrasePage;
  let fixture: ComponentFixture<AddPhrasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhrasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhrasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

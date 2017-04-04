/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultOneComponent } from './result-one.component';

describe('ResultOneComponent', () => {
  let component: ResultOneComponent;
  let fixture: ComponentFixture<ResultOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

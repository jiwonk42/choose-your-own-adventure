/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutsideOneComponent } from './outside-one.component';

describe('OutsideOneComponent', () => {
  let component: OutsideOneComponent;
  let fixture: ComponentFixture<OutsideOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

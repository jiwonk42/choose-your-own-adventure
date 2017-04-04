/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarageOneComponent } from './garage-one.component';

describe('GarageOneComponent', () => {
  let component: GarageOneComponent;
  let fixture: ComponentFixture<GarageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

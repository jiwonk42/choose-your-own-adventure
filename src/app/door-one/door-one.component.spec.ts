/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoorOneComponent } from './door-one.component';

describe('DoorOneComponent', () => {
  let component: DoorOneComponent;
  let fixture: ComponentFixture<DoorOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

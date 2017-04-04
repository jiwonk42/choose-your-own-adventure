/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsideOneComponent } from './inside-one.component';

describe('InsideOneComponent', () => {
  let component: InsideOneComponent;
  let fixture: ComponentFixture<InsideOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

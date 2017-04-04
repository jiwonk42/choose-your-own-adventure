import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PhoneOneComponent } from './phone-one/phone-one.component';
import { PhoneTwoComponent } from './phone-two/phone-two.component';
import { DoorOneComponent } from './door-one/door-one.component';
import { InsideOneComponent } from './inside-one/inside-one.component';
import { ResultOneComponent } from './result-one/result-one.component';
import { OutsideOneComponent } from './outside-one/outside-one.component';


const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'phone-one',
    component: PhoneOneComponent
  },
  {
    path: 'phone-two',
    component: PhoneTwoComponent
  },
  {
    path: 'door-one',
    component: DoorOneComponent
  },
  {
    path: 'inside-one',
    component: InsideOneComponent
  },
  {
    path: 'result-one',
    component: ResultOneComponent
  },
  {
    path: 'outside-one',
    component: OutsideOneComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

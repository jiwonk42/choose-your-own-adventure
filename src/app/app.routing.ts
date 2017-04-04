import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PhoneOneComponent } from './phone-one/phone-one.component';
import { PhoneTwoComponent } from './phone-two/phone-two.component';

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
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

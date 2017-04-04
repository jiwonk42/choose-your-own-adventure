import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { PhoneOneComponent } from './phone-one/phone-one.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'phone-one',
    component: PhoneOneComponent
  }

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

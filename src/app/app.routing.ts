import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ArtListComponent } from './art-list/art-list.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'list',
    component: ArtListComponent
  },
  {
    path: 'details/:id',
    component: ArtDetailComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  },
  {
    path: 'orders/:id',
    component: OrderDetailComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

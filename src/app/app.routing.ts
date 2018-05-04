import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ArtListComponent } from './art-list/art-list.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { EditArtComponent } from './edit-art/edit-art.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  }
  {
    path: 'about',
    component: AboutComponent
  }
  {
    path: 'list',
    component: ArtListComponent
  }
  {
    path: 'details/:id',
    component: ArtDetailComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

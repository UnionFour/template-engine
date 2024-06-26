import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PosterPageComponent } from './pages/poster-page/poster-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'poster/:index',
    component: PosterPageComponent,
  },
];


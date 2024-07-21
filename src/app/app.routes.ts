import { Routes } from '@angular/router';
import { Review202406Component } from './review202406/review202406.component';
import { Review202407Component } from './review202407/review202407.component';

export const routes: Routes = [
  { path: '2024_june', component: Review202406Component },
  { path: '2024_july', component: Review202407Component },
  { path: '**', component: Review202407Component },
];

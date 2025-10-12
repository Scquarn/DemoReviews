import { Routes } from '@angular/router';
import { Review202406Component } from './review202406/review202406.component';
import { Review202407Component } from './review202407/review202407.component';
import { Review2024072Component } from './review202407_2/review202407_2.component';
import { Review202410Component } from './review202410/review202410.component';
import { Review202502Component } from './review202502/review202502.component';
import { Review202506Component } from './review202506/review202506.component';
import { Review202510Component } from './review202510/review202510.component';

export const routes: Routes = [
  { path: '2025_october', component: Review202510Component },
  { path: '2025_june', component: Review202506Component },
  { path: '2025_february', component: Review202502Component },
  { path: '2024_october', component: Review202410Component },
  { path: '2024_july_2', component: Review2024072Component },
  { path: '2024_july', component: Review202407Component },
  { path: '2024_june', component: Review202406Component },
  { path: '**', component: Review202510Component },
];

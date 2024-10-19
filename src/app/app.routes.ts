import { Routes } from '@angular/router';
import { Review202406Component } from './review202406/review202406.component';
import { Review202407Component } from './review202407/review202407.component';
import { Review2024072Component } from './review202407_2/review202407_2.component';
import { Review202410Component } from './review202410/review202410.component';

export const routes: Routes = [
  { path: '2024_june', component: Review202406Component },
  { path: '2024_july', component: Review202407Component },
  { path: '2024_july_2', component: Review2024072Component },
  { path: '2024_october', component: Review202410Component },
  { path: '**', component: Review202410Component },
];

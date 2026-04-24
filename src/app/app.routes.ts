import { Routes } from '@angular/router';
import { ActionPlanComponent } from './action-plan.component';
import { CaseDetailsComponent } from './case-details.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'case-details',
    component: CaseDetailsComponent,
  },
  {
    path: 'action-plan',
    component: ActionPlanComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

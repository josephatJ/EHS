import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alerts',
    pathMatch: 'full',
  },
  {
    path: 'alerts',
    component: ListComponent,
  },
  {
    path: 'alert/:id',
    component: AlertPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRoutingModule {}

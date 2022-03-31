import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Dhis2DashboardModule } from '@iapps/dhis2-dashboard';

@NgModule({
  declarations: [HomeComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    Dhis2DashboardModule,
  ],
})
export class DashboardModule {}

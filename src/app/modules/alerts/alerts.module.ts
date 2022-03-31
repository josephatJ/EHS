import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { AlertPageComponent } from './pages/alert-page/alert-page.component';
import { AlertRoutingModule } from './alerts-routing.module';

@NgModule({
  declarations: [ListComponent, AlertPageComponent],
  entryComponents: [],
  imports: [CommonModule, AlertRoutingModule, SharedModule],
})
export class AlertsModule {}

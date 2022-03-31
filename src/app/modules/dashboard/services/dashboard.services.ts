import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getAllDashboardConfigs() {
    const url = 'dataStore/ehs/dashboards';
    return this.http.get(url);
  }

  getDashboardItemsConfigs(id: String) {
    const dashboardConfigsUrl = `dashboards/${id}.json?fields=id,name,description,favorite,dashboardItems[id,type,shape,visualization[id],chart~rename(visualization)]`;

    return this.http.get(dashboardConfigsUrl).pipe(
      map((results) => results),
      catchError((error) => {

        return of({});
      })
    );
  }

  getChartConfigs(chartId: String) {
    const chartUrl = `visualizations/${chartId}.json?fields=id,type,dataElementDimensions,displayName~rename(name),displayDescription~rename(description),columns[dimension,legendSet[id],filter,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],rows[dimension,legendSet[id],filter,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],filters[dimension,legendSet[id],filter,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]]`;

    return this.http.get(chartUrl);
  }

  fetchDashboardItemAnalyticsData() {
    const url = 'dataStore';
    
    return this.http.get(url);
  }
}

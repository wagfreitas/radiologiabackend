import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartsModule,
    BreadcrumbModule,
    RouterModule.forChild([
      {
        path: 'painel',
        component: DashboardComponent
      },
      ])
  ]
})
export class DashboardModule { }

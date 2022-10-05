
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { BreadcrumbModule } from '../../_layout/breadcrumb/breadcrumb.module';
import { CardModule } from '../partials/general/card/card.module';
import { MatchHeightModule } from './../partials/general/match-height/match-height.module';

import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { MaterialModule } from '../../app-material/material.module';
import { MatDialogModule, MatGridListModule, MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NouisliderModule } from 'ng2-nouislider';
import { LaudosTablesResolver } from '../../_resolver/tables.resolver';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [EditComponent, ListComponent ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    MatchHeightModule,
    MaterialModule,
    MatTableModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    NouisliderModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),

    RouterModule.forChild([
      {
        path: 'listCirur',
        component: ListComponent,
        resolve: {
          exame: LaudosTablesResolver
        }

      },
      {
        path: 'editCirur',
        component: EditComponent
      }
    ])
  ],
  providers:[
    LaudosTablesResolver,
    DatePipe
  ]
})
export class ExamesModule { }

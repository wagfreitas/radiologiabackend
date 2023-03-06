import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';
import {DatePipe} from '@angular/common';

import { CadEquipeComponent } from './cad-equipe/cad-equipe.component';
import { MaterialModule } from '../../app-material/material.module';
import { MascarasComponent } from './mascaras/mascaras.component';
import { Mascara2Component } from './mascara2/mascara2.component';



@NgModule({
  declarations: [CadEquipeComponent, MascarasComponent, Mascara2Component],
  imports: [
    CommonModule,
    CardModule,
    BreadcrumbModule,
    MatchHeightModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MaterialModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([
      {
        path: 'exames',
        component: CadEquipeComponent
      },
      {
        path: 'mascaras',
        component: MascarasComponent
      },
      {
        path: 'mascaras2',
        component: Mascara2Component
      },
    ])
  ],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class CadastrosModule { }

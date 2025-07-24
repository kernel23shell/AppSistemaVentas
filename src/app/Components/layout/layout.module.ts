import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import { DashBoardComponent } from './Pages/dash-board/dash-board.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    DashBoardComponent
  ]
})
export class LayoutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/Material/card';
import { MatInputModule } from '@angular/Material/input';
import { MatSelectModule } from '@angular/Material/select';
import { MatProgressBarModule } from '@angular/Material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/Material/progress-spinner';
import { MatGridListModule } from '@angular/Material/grid-list';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/Material/toolbar';
import { MatButtonModule } from '@angular/Material/button';
import { MatSidenavModule } from '@angular/Material/sidenav';
import { MatIconModule } from '@angular/Material/icon';
import { MatListModule } from '@angular/Material/list';

import { MatTableModule } from '@angular/Material/table';
import { MatPaginatorModule } from '@angular/Material/paginator';
import { MatDialogModule } from '@angular/Material/dialog';
import { MatSnackBarModule } from '@angular/Material/snack-bar';
import { MatTooltipModule } from '@angular/Material/tooltip';
import { MatAutocompleteModule } from '@angular/Material/autocomplete';
import { MatDatepickerModule } from '@angular/Material/datepicker';

import { MatNativeDateModule } from '@angular/Material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
    ,ReactiveFormsModule
    ,FormsModule
    ,HttpClientModule
    ,MatCardModule
    ,MatInputModule
    ,MatSelectModule
    ,MatProgressBarModule
    ,MatProgressSpinnerModule
    ,MatGridListModule
    ,LayoutModule
    ,MatToolbarModule
    ,MatButtonModule
    ,MatIconModule
    ,MatListModule
    ,MatTableModule
    ,MatPaginatorModule
    ,MatDialogModule
    ,MatSnackBarModule
    ,MatTooltipModule
    ,MatAutocompleteModule
    ,MatDatepickerModule
    ,MatNativeDateModule
    ,MomentDateModule
  ],
  providers:[
    MatDatepickerModule
    ,MatNativeDateModule
  ]
})
export class SharedModule { }

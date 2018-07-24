import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';

export const MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})

export class MaterialModule { }

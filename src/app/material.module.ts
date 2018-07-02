import * as m from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
   m.MatButtonModule,
   m.MatCheckboxModule,
   m.MatIconModule,
   m.MatToolbarModule,
   m.MatCardModule,
   m.MatExpansionModule,
   m.MatFormFieldModule,
   m.MatChipsModule,
   m.MatTooltipModule,
   m.MatSidenavModule,
   m.MatMenuModule,
   m.MatFormFieldModule,
   m.MatCheckboxModule,
   m.MatRadioModule
  ],
  exports: [
    m.MatButtonModule,
    m.MatCheckboxModule,
    m.MatIconModule,
    m.MatToolbarModule,
    m.MatCardModule,
    m.MatExpansionModule,
    m.MatFormFieldModule,
    m.MatChipsModule,
    m.MatTooltipModule,
    m.MatSidenavModule,
    m.MatMenuModule,
    m.MatFormFieldModule,
    m.MatCheckboxModule,
    m.MatRadioModule
  ]
})
export class MaterialModule { }
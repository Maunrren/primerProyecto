import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGenericaComponent } from './tabla-generica/tabla-generica.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { MaterialModule } from './material/material.module';


const shared = [TablaGenericaComponent,DialogoConfirmacionComponent];
@NgModule({
  declarations: [
    ...shared
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ...shared,
    MaterialModule
  ]
})
export class SharedModule { }

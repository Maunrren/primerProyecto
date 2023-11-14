import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutorService } from './services/autor.service';
import { CartaAutorComponent } from './carta-autor/carta-autor.component';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';


@NgModule({
  declarations: [
    CartaAutorComponent,
    ExpositorAutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [AutorService]
})
export class AutorModule { }

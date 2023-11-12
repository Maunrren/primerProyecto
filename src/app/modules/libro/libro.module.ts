import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { CartaLibroComponent } from './carta-libro/carta-libro.component';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LibroService } from './services/libro.service';


@NgModule({
  declarations: [
    CartaLibroComponent,
    ExpositorLibrosComponent,
    FormularioLibroComponent
  ],
  imports: [
    CommonModule,
    LibroRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [LibroService]
})
export class LibroModule { }

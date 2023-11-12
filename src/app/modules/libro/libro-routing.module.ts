import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/modules/usuario/services/login.service';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';

const routes: Routes = [
  { path:'expositor',
    component: ExpositorLibrosComponent,
    title: 'Expositor de libros'
  },
  { path: 'creacion',
    component:FormularioLibroComponent,
    title: 'Creación de libros',
    canActivate:[
      () => inject(LoginService).IsLogged()
    ]
  },
  { path: 'edicionLibro/:id',
    component:FormularioLibroComponent,
    title: 'Edición de libro',
    canActivate:[
      () => inject(LoginService).IsLogged()
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }

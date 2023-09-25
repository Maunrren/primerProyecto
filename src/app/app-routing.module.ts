import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';

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
  { path: 'login',
    component:LoginComponent,
    title: 'Iniciar Sesión'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

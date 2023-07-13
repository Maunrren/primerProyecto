import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { CreacionLibroComponent } from './creacion-libro/creacion-libro.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';

const routes: Routes = [
  { path:'expositor',
    component: ExpositorLibrosComponent,
    title: 'Expositor de libros'
  },
  { path: 'creacion',
    component:CreacionLibroComponent,
    title: 'Creación de libros',
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

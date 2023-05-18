import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorLibrosComponent } from './expositor-libros/expositor-libros.component';
import { CreacionLibroComponent } from './creacion-libro/creacion-libro.component';
import { AuthGuard } from './guards/auth.guards';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'expositor',
    component: ExpositorLibrosComponent,
    title: 'Expositor de libros'
  },
  { path: 'creacion',
    component:CreacionLibroComponent,
    title: 'Creación de libros',
    canActivate:[AuthGuard]
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

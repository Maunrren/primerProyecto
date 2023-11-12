import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorLibrosComponent } from './modules/libro/expositor-libros/expositor-libros.component';
import { FormularioLibroComponent } from './modules/libro/formulario-libro/formulario-libro.component';
import { LoginService } from './modules/usuario/services/login.service';

const routes: Routes = [
  {
    path:'',redirectTo:'libro/expositor', pathMatch:'full'
  },
  { path: 'usuario',
    loadChildren: () =>
      import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  { path: 'libro',
    loadChildren: () =>
      import('./modules/libro/libro.module').then(m => m.LibroModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

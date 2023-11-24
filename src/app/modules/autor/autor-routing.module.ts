import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';
import { FormularioAutorComponent } from './formulario-autor/formulario-autor.component';
import { LoginService } from '../usuario/services/login.service';

const routes: Routes = [
    { path:'expositor',
      component: ExpositorAutorComponent,
      title: 'Expositor de autores'
    },
    { path:'creacion',
      component: FormularioAutorComponent,
      title: 'Formulario de autores',
      canActivate:[
        () => inject(LoginService).IsLogged()
      ]
    },
    { path: 'edicion/:id',
      component:FormularioAutorComponent,
      title: 'Edición de autor',
      canActivate:[
        () => inject(LoginService).IsLogged()
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }

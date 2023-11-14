import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpositorAutorComponent } from './expositor-autor/expositor-autor.component';

const routes: Routes = [
    { path:'expositor',
      component: ExpositorAutorComponent,
      title: 'Expositor de autores'
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }

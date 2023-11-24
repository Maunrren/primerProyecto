import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Autor } from '../interfaces/Autor';
import { LoginService } from '../../usuario/services/login.service';
import { DialogoConfirmacionComponent } from 'src/app/shared/dialogo-confirmacion/dialogo-confirmacion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carta-autor',
  templateUrl: './carta-autor.component.html',
  styleUrl: './carta-autor.component.scss'
})
export class CartaAutorComponent {

  constructor(public dialogo: MatDialog) {}

  @Input() autorRecibido:Autor;
  @Input() estaEnLectura:boolean;
  @Output() eliminado:EventEmitter<void> = new EventEmitter();
  
  loginService: LoginService = inject(LoginService);
  logeado:boolean = this.loginService.logeado;
  router:Router = inject(Router);

  mostrarDialogoEliminar():void{
    this.dialogo.open(DialogoConfirmacionComponent,{
      data: `¿Quieres eliminar del registro el libro: `+ this.autorRecibido.nombre +` `+ this.autorRecibido.apellido1 +` ?`
    })
    .afterClosed().subscribe(respuestaUsuario => {
      if(respuestaUsuario){
        this.eliminado.emit();
      }
    });
  }

  editarAutor(){
    this.router.navigateByUrl('autor/edicion/'+this.autorRecibido.id);
  }
}

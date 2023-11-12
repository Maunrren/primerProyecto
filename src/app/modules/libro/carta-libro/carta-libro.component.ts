import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../../../shared/dialogo-confirmacion/dialogo-confirmacion.component"
import { Router } from '@angular/router';
import { LoginService } from '../../usuario/services/login.service';

@Component({
  selector: 'app-carta-libro',
  templateUrl: './carta-libro.component.html',
  styleUrls: ['./carta-libro.component.scss']
})
export class CartaLibroComponent {

  constructor(public dialogo: MatDialog) {}

  @Input() libroRecibido:Libro;
  @Input() estaEnCarrito:boolean;
  @Input() estaEnLectura:boolean;

  @Output() comprado:EventEmitter<Libro> = new EventEmitter();
  @Output() sacado:EventEmitter<void> = new EventEmitter();
  @Output() eliminado:EventEmitter<void> = new EventEmitter();
  
  router:Router = inject(Router);
  
  
  loginService: LoginService = inject(LoginService);
  logeado:boolean = this.loginService.logeado;
  
  comprar(){
    this.comprado.emit(this.libroRecibido);
  }
  
  mostrarDialogoEliminar():void{
    this.dialogo.open(DialogoConfirmacionComponent,{
      data: `¿Quieres eliminar del registro el libro: `+ this.libroRecibido.titulo+ ` ?`
    })
    .afterClosed().subscribe(respuestaUsuario => {
      if(respuestaUsuario){
        this.eliminado.emit();
      }
    });
    

    
  }
  editarLibro(){
    this.router.navigateByUrl('edicionLibro/'+this.libroRecibido.id);
  }
  sacar(){
    this.sacado.emit();
    
  }
}



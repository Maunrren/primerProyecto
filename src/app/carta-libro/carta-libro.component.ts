import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { LibroService } from '../services/libro.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-carta-libro',
  templateUrl: './carta-libro.component.html',
  styleUrls: ['./carta-libro.component.scss']
})
export class CartaLibroComponent {

  constructor(public dialogo: MatDialog) {}

  @Input() libroRecibido:Libro;
  @Input() estaEnCarrito:boolean;

  @Output() comprado:EventEmitter<Libro> = new EventEmitter();
  @Output() sacado:EventEmitter<void> = new EventEmitter();
  @Output() eliminado:EventEmitter<void> = new EventEmitter();
  
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

  sacar(){
    this.sacado.emit();
    
  }
}



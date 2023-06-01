import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../interfaces/Libro';



@Component({
  selector: 'app-carta-libro',
  templateUrl: './carta-libro.component.html',
  styleUrls: ['./carta-libro.component.scss']
})
export class CartaLibroComponent {
  @Input() libroRecibido:Libro;
  @Input() estaEnCarrito:boolean;

  @Output() comprado:EventEmitter<Libro> = new EventEmitter();
  @Output() sacado:EventEmitter<void> = new EventEmitter();
  comprar(){
    this.comprado.emit(this.libroRecibido);
  }
  sacar(){
    this.sacado.emit();
  }
}

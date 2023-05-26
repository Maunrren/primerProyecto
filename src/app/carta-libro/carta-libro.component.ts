import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../interfaces/Libro';



@Component({
  selector: 'app-carta-libro',
  templateUrl: './carta-libro.component.html',
  styleUrls: ['./carta-libro.component.scss']
})
export class CartaLibroComponent {
  @Input() libroRecibido:Libro;

  @Output() comprado:EventEmitter<Libro> = new EventEmitter();
  comprar(){
    this.comprado.emit(this.libroRecibido);
  }
}

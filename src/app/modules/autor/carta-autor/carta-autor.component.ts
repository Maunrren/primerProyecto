import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Autor } from '../interfaces/Autor';

@Component({
  selector: 'app-carta-autor',
  templateUrl: './carta-autor.component.html',
  styleUrl: './carta-autor.component.scss'
})
export class CartaAutorComponent {

  constructor(public dialogo: MatDialog) {}

  @Input() autorRecibido:Autor;

  
}

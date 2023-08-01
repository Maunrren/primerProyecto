import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.scss']
})


export class DialogoConfirmacionComponent {
  @Input() libroRecibido:Libro;
  constructor(
    public dialogo: MatDialogRef<DialogoConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje:string
    ){}

  
  @Output() eliminado:EventEmitter<Libro> = new EventEmitter();
 
  cerrarDialogo(): void {
    this.dialogo.close(false);
  }
  confirmar(): void {
    this.dialogo.close(true);
  }

}



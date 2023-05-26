import { Component } from '@angular/core';
import { Libro } from '../interfaces/Libro';

@Component({
  selector: 'app-expositor-libros',
  templateUrl: './expositor-libros.component.html',
  styleUrls: ['./expositor-libros.component.scss']
})

export class ExpositorLibrosComponent {

  modoElegido:string = 'Comprar';

  librosOfrecidos:Libro[] = [];
  librosComprados:Libro[] = [];
  ngOnInit(){
    const libro1:Libro = {
      titulo: 'Cien años de soledad',
      cantidadPaginas: 550,
      autor: 'Gabriel García Marquez',
      stock:10,
      precio:20
    }
    const libro2:Libro = {
      titulo: 'Cronicas de una muerte anunciada',
      cantidadPaginas: 250,
      autor: 'Gabriel García Marquez',
      stock:15,
      precio:25
    }
    const libro3:Libro = {
      titulo: 'Lazarillo de Tormes',
      cantidadPaginas: 150,
      stock:80,
      precio:13
    }

    this.librosOfrecidos =[libro1,libro2];
    this.librosOfrecidos.push(libro3);
  }


  /**
   * Cambia el modo elegido
   * @param modoDeseado modo a setear
   */
  cambiarModo(modoDeseado:string):void{
    this.modoElegido = modoDeseado;
  }

  gestionaCompra(libro:Libro){
    this.librosComprados.push(libro);
  }

}

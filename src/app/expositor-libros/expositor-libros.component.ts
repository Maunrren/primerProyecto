import { Component, inject } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { Observable } from 'rxjs';
import { LibroService } from '../services/libro.service';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-expositor-libros',
  templateUrl: './expositor-libros.component.html',
  styleUrls: ['./expositor-libros.component.scss']
})

export class ExpositorLibrosComponent {

  modoElegido:string = 'Comprar';

  librosOfrecidos:Libro[] = [];
  librosComprados:Libro[] = [];
  libroService:LibroService = inject(LibroService);
  configService:ConfigService = inject(ConfigService);

  constructor(){
    this.configService.tituloWeb.next('Expositor de libros');
  }

  ngOnInit(){
    /*PROMESA
    console.log('primera parte');
    this.libroService.recuperarLibrosPromesa().then(librosBBDD=>{
      this.librosOfrecidos = librosBBDD;
      console.log('llega la respuesta');
    });
    console.log('segundaparte');*/
    //Observable
    this.libroService.recuperarLibrosObservable().subscribe(librosBBDD =>{
      this.librosOfrecidos= librosBBDD;
    });

    console.log(this.libroService.miLibroFavorito);
    this.libroService.miLibroFavorito = 'El relato de un naufrago';
    
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
  sacarLibro(libro:Libro){
    //indexOf saca indice del elemento pasado por parametro
    //splice elimina elemento según X posición y X cantidad de elementos a borrar
    //slice lo mismo que splice pero no modifica el array, sino que devuelve una copia
    //forEach iterar
    /*
    this.librosComprados.findIndex(libroFiltro => libroFiltro.titulo === libro.titulo); // devuelve el indice
    this.librosComprados.find(libroFiltro => libroFiltro.titulo === libro.titulo); // devuelve el elemento
    this.librosComprados.filter(libroFiltro => libroFiltro.titulo === libro.titulo); // devuelve el ARRAY de elementos que cumplen la condición.
    */
    
    this.librosComprados.splice(this.librosComprados.indexOf(libro),1)
  }


  

}

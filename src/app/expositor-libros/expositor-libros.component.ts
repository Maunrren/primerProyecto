import { Component } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { Observable } from 'rxjs';

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
    /*PROMESA
    console.log('primera parte');
    this.recuperarLibrosPromesa().then(librosBBDD=>{
      this.librosOfrecidos = librosBBDD;
      console.log('llega la respuesta');
    });
    console.log('segundaparte');*/

    //Observable
    this.recuperarLibrosObservable().subscribe(librosBBDD =>{
      this.librosOfrecidos= librosBBDD;
    });
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


  recuperarLibrosPromesa(): Promise<Libro[]>{
    return new Promise<Libro[]>((resolve,reject)=>{
        //Código a ejecutar cuando alguien solicite la Promesa.
        setTimeout(() =>{
          //codigo a ejecutar
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
  
          const librosBBDD = [libro1,libro2,libro3];
          resolve(librosBBDD);
        },2000);
        
    });

  }

  recuperarLibrosObservable():Observable<Libro[]>{
    return new Observable<Libro[]>(observer =>{
      //nunca usar timeout en ejemplos reales.
      setTimeout(() => {
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
        const librosBBDD = [libro1,libro2,libro3];

        observer.next(librosBBDD);
        //esto hace que ya no van a dar más datos, sin complete se queda a la espera.
        observer.complete();
      }, 2000);
    });
  }

}

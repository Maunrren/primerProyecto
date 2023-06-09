import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';
import { LoginService } from './login.service';

@Injectable(
  //con esto es global, lo "eliminamos"
  //providedIn: 'root'
)
export class LibroService {
  miLibroFavorito: string= 'Cien años de soledad';
  loginService:LoginService = inject(LoginService);
  constructor() { }

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

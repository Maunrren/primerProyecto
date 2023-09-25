import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/Libro';
import { LoginService } from './login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable(
  //con esto es global, lo "eliminamos"
  //providedIn: 'root'
)
export class LibroService {
  miLibroFavorito: string = 'Cien años de soledad';
  loginService: LoginService = inject(LoginService);
  spinner: NgxSpinnerService = inject(NgxSpinnerService);
  httpClient: HttpClient = inject(HttpClient);
  notificacion: MatSnackBar = inject(MatSnackBar);
  //creamos una variable para la API de URL con la DB
  apiUrl: string = environment.api + 'libros';
  constructor() {
    this.spinner.show();
    this.spinner.hide();

  }

  /*recuperarLibrosPromesa(): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      //Código a ejecutar cuando alguien solicite la Promesa.
      setTimeout(() => {
        //codigo a ejecutar
        const libro1: Libro = {
          titulo: 'Cien años de soledad',
          cantidadPaginas: 550,
          autor: 'Gabriel García Marquez',
          stock: 10,
          precio: 20
        }
        const libro2: Libro = {
          titulo: 'Cronicas de una muerte anunciada',
          cantidadPaginas: 250,
          autor: 'Gabriel García Marquez',
          stock: 15,
          precio: 25
        }
        const libro3: Libro = {
          titulo: 'Lazarillo de Tormes',
          cantidadPaginas: 150,
          stock: 80,
          precio: 13
        }

        const librosBBDD = [libro1, libro2, libro3];
        resolve(librosBBDD);
      }, 2000);

    });

  }*/

  recuperarLibrosObservable(): Observable<Libro[]> {

    return new Observable<Libro[]>(observer => {
      this.httpClient.get<Libro[]>(this.apiUrl).subscribe(librosBBDD => {

        console.log(librosBBDD);
        this.spinner.show();
        observer.next(librosBBDD);
        observer.complete();
        this.spinner.hide();
      });


    });
  }

  recuperarLibroObservable(id: number): Observable<Libro> {

    return new Observable<Libro>(observer => {
      this.httpClient.get<Libro>(`${this.apiUrl}/${id}`).subscribe(libroBBDD => {
        observer.next(libroBBDD);
        observer.complete();
      });


    });
  }
  crearLibroObservable(libro: Libro): Observable<Libro> {
    return new Observable<Libro>(observer => {
      //this.apiUrl viene del environment (carpeta environments)
      this.httpClient.post<Libro>(this.apiUrl, libro).subscribe(libroBBDD => {
        observer.next(libroBBDD);
        observer.complete();
      });

    });
  }

  editarLibroObservable(libroEditar: Libro): Observable<Libro> {
    return new Observable<Libro>(observer => {
      //this.apiUrl viene del environment (carpeta environments)
      this.httpClient.put<Libro>(`${this.apiUrl}/${libroEditar.id}`, libroEditar).subscribe(libroEditado=> {
        this.notificacion.open('Libro '+libroEditado.titulo+' editado correctamente', 'Cerrar', {duration: 3000});
        observer.next(libroEditado);
        observer.complete();
      });

    });
  }
  eliminarLibroObservable(libro: Libro): Observable<Libro> {
    /*queryParam aporta información extra:
        apiUrl/libros/paginado?page=1;pageSize=10;
        
    
      path param
      Path param, se trata para identificadores y acceder a dominios
          apiUrl/libros/IDLIBRO
          apiURL/biblioteca/IDBIBLIOTECA/libro/IDLIBRO


    */
    return new Observable<Libro>(observer => {
                                    //también se podría utilizar:  `${this.apiUrl}/${id}`
      this.httpClient.delete<Libro>(this.apiUrl +'/'+ libro.id).subscribe(() => {
        observer.next();
        observer.complete();
      });

    });
  }
}

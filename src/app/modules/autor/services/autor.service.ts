import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interfaces/Autor';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable(
  //con esto es global, lo "eliminamos"
  //providedIn: 'root'
)
export class AutorService {

  spinner: NgxSpinnerService = inject(NgxSpinnerService);
  httpClient: HttpClient = inject(HttpClient);
  apiUrl: string = environment.api + 'autores';
  notificacion: MatSnackBar = inject(MatSnackBar);
  
  recuperarAutoresObservable(): Observable<Autor[]> {
    this.spinner.show();
    return new Observable<Autor[]>(observer => {
      this.httpClient.get<Autor[]>(this.apiUrl).subscribe(autoresBBDD => {
        setTimeout(() => {
        console.log(autoresBBDD);
       
        observer.next(autoresBBDD);
        observer.complete();
        this.spinner.hide();
      },500)
      });


    });
  }

  crearAutorObservable(autor:Autor){
    return new Observable<Autor>(observer =>{
      this.httpClient.post<Autor>(this.apiUrl,autor).subscribe(autoresBBDD=>{
        observer.next(autoresBBDD);
        observer.complete();
      });
    });

  }
  recuperarAutorObservable(id:number){
    return new Observable<Autor>(observer =>{
      this.httpClient.get<Autor>(`${this.apiUrl}/${id}`).subscribe(autoresBBDD =>{
        console.log(autoresBBDD);

        observer.next(autoresBBDD);
        observer.complete();
      });
    })
  }
  editarAutorObservable(autorEditar:Autor): Observable<Autor>{
    return new Observable<Autor>(observer=>{
      this.httpClient.put<Autor>(`${this.apiUrl}/${autorEditar.id}`,autorEditar).subscribe(autorEditado =>{
        this.notificacion.open('Autor ' + autorEditado.nombre + ' editado correctamente', 'Cerrar', { duration: 3000 });
        observer.next(autorEditado);
        observer.complete();
      });
    })
  }


  eliminarAutorObservable(autor:Autor): Observable<Autor> {
    return new Observable<Autor>(observer => {
      //también se podría utilizar:  `${this.apiUrl}/${id}`
      this.httpClient.delete<Autor>(this.apiUrl + '/' + autor.id).subscribe(() => {
        observer.next();
        observer.complete();
      });

    });
  }
}

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../interfaces/Autor';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  spinner: NgxSpinnerService = inject(NgxSpinnerService);
  httpClient: HttpClient = inject(HttpClient);
  apiUrl: string = environment.api + 'autores';
  
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
}

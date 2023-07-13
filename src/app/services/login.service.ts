import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from './libro.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  router:Router = inject(Router);
  IsLogged():boolean{
    console.log('seguridad de service');
        const token:string | null = sessionStorage.getItem('token');
        const haIniciadoSesion:boolean = token !==null;
        if(haIniciadoSesion){
            return true;
        }
        else{
            this.router.navigateByUrl('login');
            return false;
        }
  }
}

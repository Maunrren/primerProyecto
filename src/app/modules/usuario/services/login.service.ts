import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logeado: boolean = false;
  router:Router = inject(Router);
  IsLogged():boolean{
    console.log('seguridad de service');
        const token:string | null = sessionStorage.getItem('token');
        const haIniciadoSesion:boolean = token !==null;
        if(haIniciadoSesion){
            this.logeado = true;
            return true;
        }
        else{
            this.router.navigateByUrl('usuario/login');
            this.logeado= false;
            return false;
        }
  }
}

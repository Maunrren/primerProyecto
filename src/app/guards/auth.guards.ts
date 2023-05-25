import { Injectable, inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate{

    router:Router = inject(Router);
    

    canActivate():boolean{
        console.log('seguridad');
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
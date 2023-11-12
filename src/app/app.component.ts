import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ConfigService } from './services/config.service';
import { LoginService } from './modules/usuario/services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  router:Router= inject(Router);
  title = 'primerProyecto';
  loginService: LoginService = inject(LoginService);
  configService:ConfigService = inject(ConfigService);
  cd= inject(ChangeDetectorRef);
  logeado:boolean = this.loginService.logeado;

  ngOnInit(){

    this.configService.tituloWeb.subscribe(nuevoTituloWeb =>{
      this.title = nuevoTituloWeb;
    });
  }

  ngAfterContentChecked(){
    this.cd.detectChanges();
  }

  cerrarSesion(){
    sessionStorage.removeItem('token');
    
    this.loginService.logeado= false;
    this.router.navigateByUrl('usuario/login');
  }
}

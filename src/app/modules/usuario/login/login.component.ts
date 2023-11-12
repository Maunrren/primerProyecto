import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfigService } from '../../../services/config.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  router:Router = inject(Router);

  notificacion:MatSnackBar = inject(MatSnackBar);
  configService:ConfigService = inject(ConfigService);
  loginService: LoginService = inject(LoginService);
  constructor(){
    this.configService.tituloWeb.next('Inicio de sesión');
  }
  ngOnInit(){
    this.formularioLogin = new FormGroup({
      //primer parametro es valor por defecto -> null, segundo parametro es el validador. Si quieres varios validadores los insertaras en un array []
      correo: new FormControl('admin@gmail.com',[Validators.email,Validators.required]),
      contrasena: new FormControl('1234',Validators.required)

    });
    
    
  }

  iniciarSesion(){
    const correEscrito: string = this.formularioLogin.get('correo')?.value;
    const contrasena: string = this.formularioLogin.get('contrasena')?.value;

    if(correEscrito === 'admin@gmail.com' && contrasena === '1234'){
      sessionStorage.setItem('token','1');
      this.loginService.logeado = true;
        //Método navigateByUrl
      this.router.navigateByUrl('libro/creacion');
    }
    else{
      this.notificacion.open('Correo o contraseña incorrectos', 'Cerrar', {duration:3000});
    }

    
  }
}

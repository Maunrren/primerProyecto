import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  router:Router = inject(Router);

  notificacion:MatSnackBar = inject(MatSnackBar);


  ngOnInit(){
    this.formularioLogin = new FormGroup({
      //primer parametro es valor por defecto -> null, segundo parametro es el validador. Si quieres varios validadores los insertaras en un array []
      correo: new FormControl(null,[Validators.email,Validators.required]),
      contrasena: new FormControl(null,Validators.required)

    })

    
  }

  iniciarSesion(){
    const correEscrito: string = this.formularioLogin.get('correo')?.value;
    const contrasena: string = this.formularioLogin.get('contrasena')?.value;

    if(correEscrito === 'admin@gmail.com' && contrasena === '1234'){
      sessionStorage.setItem('token','1');
      //Método navigateByUrl
      this.router.navigateByUrl('creacion');
    }
    else{
      this.notificacion.open('Correo o contraseña incorrectos', 'Cerrar', {duration:3000})
    }

    
  }
}

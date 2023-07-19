import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { LibroService } from '../services/libro.service';
import { Libro } from '../interfaces/Libro';

@Component({
  selector: 'app-creacion-libro',
  templateUrl: './creacion-libro.component.html',
  styleUrls: ['./creacion-libro.component.scss']
})
export class CreacionLibroComponent implements OnInit {

  formularioCreacion: FormGroup;
  librosOfrecidos:Libro[] = [];
  libroService:LibroService = inject(LibroService);
  configService:ConfigService = inject(ConfigService);


  constructor(){
    this.configService.tituloWeb.next('Creador de libros');
  }

  ngOnInit(){
    this.formularioCreacion = new FormGroup({
      //primer parametro es valor por defecto -> null, segundo parametro es el validador. Si quieres varios validadores los insertaras en un array []
      titulo: new FormControl(null,Validators.required),
      autor: new FormControl(null),
      stock: new FormControl(null,Validators.required),
      precio: new FormControl(null,Validators.required)
    });
  
    //Observable
    this.libroService.recuperarLibrosObservable().subscribe(librosBBDD =>{
      this.librosOfrecidos= librosBBDD;
    });
  }
}

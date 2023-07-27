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
  librosCreados:Libro[] = [];
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
      cantidadPaginas: new FormControl(null,Validators.required),
      stock: new FormControl(null,Validators.required),
      precio: new FormControl(null,Validators.required)
    });
  
  }

  crearLibro(){
    const titulo: string = this.formularioCreacion.get('titulo')?.value;
    const autor: string = this.formularioCreacion.get('autor')?.value;
    const cantidadPaginas: number = this.formularioCreacion.get('cantidadPaginas')?.value;
    const stock: number = this.formularioCreacion.get('stock')?.value;
    const precio: number = this.formularioCreacion.get('precio')?.value;

    const libro: Libro = {
      titulo : titulo,
      autor: autor,
      cantidadPaginas: cantidadPaginas,
      stock: stock,
      precio: precio
    }
      this.libroService.crearLibrosObservable(libro);

      this.librosCreados.push(libro);

  }
}

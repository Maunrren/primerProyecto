import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../services/config.service';
import { Libro } from '../interfaces/Libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.scss']
})
export class FormularioLibroComponent implements OnInit {

  formularioLibro: FormGroup;
  librosCreados:Libro[] = [];
  libroCreado:Libro;
  librosOfrecidos:Libro[] = [];
  libroService:LibroService = inject(LibroService);
  configService:ConfigService = inject(ConfigService);

  activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);
  constructor(){
    this.configService.tituloWeb.next('Creador de libros');
  }

  ngOnInit(){

    this.formularioLibro = new FormGroup({
      //primer parametro es valor por defecto -> null, segundo parametro es el validador. Si quieres varios validadores los insertaras en un array []
      id: new FormControl(),
      titulo: new FormControl(null,Validators.required),
      autor: new FormControl(null),
      cantidadPaginas: new FormControl(null,Validators.required),
      stock: new FormControl(null,Validators.required),
      precio: new FormControl(null,Validators.required)
    });
  
    this.activatedRoute.paramMap.subscribe(paramsMap =>{
      console.log(paramsMap.get('id'));
      const id:string | null = paramsMap.get('id');
      if(id){
        this.configService.tituloWeb.next('Editor de libros');
        this.formularioLibro.get('id')?.setValue(parseInt(id));
        this.libroService.recuperarLibroObservable(parseInt(id)).subscribe(libroBBDD =>{
          //vinculando el libro entero
          this.formularioLibro.setValue(libroBBDD);
          //de uno en uno sería así
          //this.formularioLibro.get('titulo')?.setValue(libroBBDD.titulo);
        });
      }
    });

  }

  guardarLibro(){
   /* if(this.formularioLibro.get('id')){
      const id: number = parseInt(this.formularioLibro.get('id')?.value);
    }
    const titulo: string = this.formularioLibro.get('titulo')?.value;
    const autor: string = this.formularioLibro.get('autor')?.value;
    const cantidadPaginas: number = this.formularioLibro.get('cantidadPaginas')?.value;
    const stock: number = this.formularioLibro.get('stock')?.value;
    const precio: number = this.formularioLibro.get('precio')?.value;

    const libro: Libro = {
      titulo : titulo,
      autor: autor,
      cantidadPaginas: cantidadPaginas,
      stock: stock,
      precio: precio
    }*/

    const libroPreparado: Libro = this.formularioLibro.value;
    console.log('LibroPrepadado:');
    console.log(libroPreparado);
    
    if(libroPreparado.id){
      //logica update
      this.libroService.editarLibroObservable(libroPreparado).subscribe(() =>{
        
        //this.librosCreados.push(this.libroCreado);
        this.router.navigateByUrl('libro/expositor');

      });
    }
    else{
      this.libroService.crearLibroObservable(libroPreparado).subscribe(librosBBDD =>{
        this.libroCreado = librosBBDD;

        this.librosCreados.push(this.libroCreado);

      });
    }

  }
}

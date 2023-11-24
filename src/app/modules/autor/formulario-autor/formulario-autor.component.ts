import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutorService } from '../services/autor.service';
import { ConfigService } from 'src/app/services/config.service';
import { Autor } from '../interfaces/Autor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-autor',
  templateUrl: './formulario-autor.component.html',
  styleUrl: './formulario-autor.component.scss'
})
export class FormularioAutorComponent implements OnInit{
  autorService:AutorService = inject(AutorService);
  configService:ConfigService = inject(ConfigService);
  activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);
  constructor(){
    this.configService.tituloWeb.next('Expositor de autores');
  }
  
  formularioAutor: FormGroup;
  autoresCreados:Autor[] = [];
  autorCreado:Autor;
  ngOnInit(): void {
    this.formularioAutor = new FormGroup({
      //primer parametro es valor por defecto -> null, segundo parametro es el validador. Si quieres varios validadores los insertaras en un array []
      id: new FormControl(),
      nombre: new FormControl(null,Validators.required),
      apellido1: new FormControl(null),
      apellido2: new FormControl(null),
      generoFavorito: new FormControl(null,Validators.required)
    });
    
    this.activatedRoute.paramMap.subscribe(paramsMap =>{
      console.log(paramsMap.get('id'));
      const id:string | null = paramsMap.get('id');
      if(id){
        this.configService.tituloWeb.next('Editor de libros');
        this.formularioAutor.get('id')?.setValue(parseInt(id));
        this.autorService.recuperarAutorObservable(parseInt(id)).subscribe(autorBBDD =>{
          //vinculando el libro entero
          this.formularioAutor.setValue(autorBBDD);
          //de uno en uno sería así
          //this.formularioLibro.get('titulo')?.setValue(libroBBDD.titulo);
        });
      }
    });
    
  }
  
  guardarAutor(){
    const autorPreparado: Autor = this.formularioAutor.value;
    if(autorPreparado.id){
      //logica update
      this.autorService.editarAutorObservable(autorPreparado).subscribe(() =>{
        
        //this.librosCreados.push(this.libroCreado);
        this.router.navigateByUrl('autor/expositor');
  
      });
    }
    else{
      this.autorService.crearAutorObservable(autorPreparado).subscribe(autoresBBDD =>{
        this.autorCreado = autoresBBDD;
  
        this.autoresCreados.push(this.autorCreado);
        this.formularioAutor.reset();
      });
    } 
  }
}

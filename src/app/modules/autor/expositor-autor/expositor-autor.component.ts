import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../services/config.service';
import { AutorService } from '../services/autor.service';
import { Autor } from '../interfaces/Autor';
import { CartaAutorComponent } from "../carta-autor/carta-autor.component";
import { SharedModule } from 'src/app/shared/shared.module';
import { AutorRoutingModule } from '../autor-routing.module';

@Component({
    selector: 'app-expositor-autor',
    templateUrl: './expositor-autor.component.html',
    styleUrl: './expositor-autor.component.scss',
})


export class ExpositorAutorComponent {

  autorService:AutorService = inject(AutorService);
  configService:ConfigService = inject(ConfigService);
  autoresOfrecidos:Autor[] = [];

  constructor(){
    this.configService.tituloWeb.next('Expositor de autores');
  }
  ngOnInit(){
 
    this.recuperarAutor();

    
  }

  recuperarAutor():void{
    this.autorService.recuperarAutoresObservable().subscribe(autoresBBDD =>{
      this.autoresOfrecidos= autoresBBDD;
    });
  }
}

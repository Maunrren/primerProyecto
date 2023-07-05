import { Component, inject } from '@angular/core';
import { LibroService } from './services/libro.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primerProyecto';

  libroService:LibroService = inject(LibroService);
  configService:ConfigService = inject(ConfigService);
  ngOnInit(){

    this.configService.tituloWeb.subscribe(nuevoTituloWeb =>{
      this.title = nuevoTituloWeb;
    });

    console.log(this.libroService.miLibroFavorito);
    this.libroService.miLibroFavorito = 'Crónicas de una muerte anunciada';
  }
}

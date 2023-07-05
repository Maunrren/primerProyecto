import { Injectable } from '@angular/core';

@Injectable(
  //con esto es global, lo "eliminamos"
  //providedIn: 'root'
)
export class LibroService {
  miLibroFavorito: string= 'Cien años de soledad';
  constructor() { }
}

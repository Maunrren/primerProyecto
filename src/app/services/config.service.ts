import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  //dejamos el providedIn: 'root' para que sea un servicio global.
  providedIn: 'root'
})
export class ConfigService {
  tituloWeb: BehaviorSubject<string> = new BehaviorSubject('Inicio');
  logeadoSub: BehaviorSubject<boolean>= new BehaviorSubject(false);
  constructor() { }
}

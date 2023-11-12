import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  styleUrls: ['./tabla-generica.component.scss']
})
export class TablaGenericaComponent {
  @Input({required:true}) datos: any[];
  @Input() columnas: string[];
  @Input() modelos: string[];
}

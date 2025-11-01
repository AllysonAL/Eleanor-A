import { Component } from '@angular/core';
import { IDimensions, Unit } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'eleanor-a';

  dimensoesCaixa1 : IDimensions = {
    deph : { value: 250, unit: Unit.PX },
    width : { value: 250, unit: Unit.PX },
    height : { value: 250, unit: Unit.PX }
  };

   dimensoesCaixa2 : IDimensions = {
    deph : { value: 150, unit: Unit.PX },
    width : { value: 90, unit: Unit.PX },
    height : { value: 50, unit: Unit.PX }
  };

   dimensoesCaixa3 : IDimensions = {
    deph : { value: 40, unit: Unit.PX },
    width : { value: 20, unit: Unit.PX },
    height : { value: 20, unit: Unit.PX }
  };
}

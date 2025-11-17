import { Component } from '@angular/core';
import { IDimensions, Unit } from './types';
import { IItemDimensions } from './types/i-item-dimensions.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'eleanor-a';

  dimensoesCaixa1 : IItemDimensions = {
    deph : { value: 300, unit: Unit.PX },
    width : { value: 75, unit: Unit.PX },
    height : { value: 100, unit: Unit.PX },
    thickness: { value: 5, unit: Unit.PX }
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

import { Component, Input, OnInit } from '@angular/core';
import { IDimensions, IUnitValue } from '../../types';
import { toCssValue } from '../../Utils/dimension.helper';

@Component({
  selector: 'app-box3d',
  standalone: false,
  templateUrl: './box3d.component.html',
  styleUrl: './box3d.component.css',
})
export class Box3dComponent implements OnInit{
  @Input({ required: true }) dimensions!: IDimensions;

  //PROPRIEDADES CONVERTIDAS
  deph! : string;
  width! : string;
  height! : string;

  //PROPRIEDADES DE TRANSLATE
  translateZ! : string;
  left_translateX! : string;
  right_translateX! : string;
  translateY! : string;
  top_translateY! : string;
  bottom_translateY! : string;
  translateX! : string;

  ngOnInit(): void {
    if (this.dimensions) {
      this.deph = toCssValue(this.dimensions.deph);
      this.width = toCssValue(this.dimensions.width);
      this.height = toCssValue(this.dimensions.height);


      this.right_translateX = `${this.dimensions.width.value - (this.dimensions.deph.value/2)}px`;
      this.left_translateX = `${-(this.dimensions.deph.value/2)}px`;
      this.top_translateY = `${-(this.dimensions.deph.value/2)}px`;
      this.bottom_translateY = `${this.dimensions.height.value - (this.dimensions.deph.value/2)}px`;


      this.translateZ = this.getTranslateValue(this.dimensions.deph);
      this.translateX = this.getTranslateValue(this.dimensions.width);
      this.translateY = this.getTranslateValue(this.dimensions.height);
    }
  }

  getTranslateValue(dimension : IUnitValue) : string {
    return (dimension.value/2) + dimension.unit;
  }
}

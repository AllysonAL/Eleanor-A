import { IDimensions } from './../../types/i-dimensions.interface';
import { IItemDimensions } from './../../types/i-item-dimensions.interface';
import { Component, Input, OnInit } from '@angular/core';
import { IUnitValue, Unit } from '../../types';
import { toCssValue } from '../../Utils/dimension.helper';

@Component({
  selector: 'app-box',
  standalone: false,
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})

export class BoxComponent implements OnInit {
  @Input({ required: true }) dimensions!: IItemDimensions;

  //CAIXAS PARA CONSTRUÇÃO
  frontBack! : IDimensions;
  leftRight! : IDimensions;
  bottom! : IDimensions;

  //PROPRIEDADES CONVERTIDAS
  deph! : string;
  width! : string;
  height! : string;
  thickness! : string;

  //PROPRIEDADES DE TRANSLATE
  translateZ! : string;
  left_translateX! : string;
  right_translateX! : string;
  translateY! : string;
  top_translateY! : string;
  bottom_translateY! : string;
  translateX! : string;

  ngOnInit(){
    if (this.dimensions){
      this.setBoxToConstruct();
      this.SetPositionsToConstruct();
    }
  }

  setBoxToConstruct(){
    this.frontBack = {
      deph : { value : this.dimensions.thickness.value, unit: this.dimensions.thickness.unit },
      width : { value : this.dimensions.width.value, unit: this.dimensions.width.unit },
      height : {value: this.dimensions.height.value, unit: this.dimensions.height.unit}
    }

      this.leftRight = {
      deph : { value : this.dimensions.deph.value, unit: this.dimensions.deph.unit },
      width : { value : this.dimensions.thickness.value, unit: this.dimensions.thickness.unit },
      height : {value: this.dimensions.height.value, unit: this.dimensions.height.unit}
    }

      this.bottom = {
      deph : { value : this.dimensions.deph.value, unit: this.dimensions.deph.unit },
      width : { value : this.dimensions.width.value, unit: this.dimensions.width.unit },
      height : {value: this.dimensions.thickness.value, unit: this.dimensions.thickness.unit}
    }
  }

  SetPositionsToConstruct(){
    this.deph = toCssValue(this.dimensions.deph);
    this.width = toCssValue(this.dimensions.width);
    this.height = toCssValue(this.dimensions.height);
    this.thickness = toCssValue(this.dimensions.thickness);

    this.right_translateX = `${this.dimensions.width.value - this.dimensions.thickness.value}px`;
    this.left_translateX = `${this.dimensions.thickness.value}px`;
    this.bottom_translateY = `${this.dimensions.height.value  + (this.dimensions.thickness.value)}px`;
    this.translateZ = this.getTranslateValue(this.dimensions.deph);
  }

  getTranslateValue(dimension : IUnitValue) : string {
    return (dimension.value/2) + dimension.unit;
  }
}

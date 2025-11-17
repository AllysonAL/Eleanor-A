import { IDimensions } from "./i-dimensions.interface";
import { IUnitValue } from "./i-unit-value.interface";

export interface IItemDimensions extends IDimensions {
  thickness : IUnitValue;
}

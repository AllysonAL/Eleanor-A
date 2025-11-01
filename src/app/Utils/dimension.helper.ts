import { IUnitValue } from "../types";

export function toCssValue(unitValue : IUnitValue) : string {
  return unitValue.value + unitValue.unit;
}

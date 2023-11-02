import { Injectable } from '@angular/core';
import { ErcBaseUnitComponent } from './components/base-unit/base-unit.component';

@Injectable()
export class LayoutService {
  public spacing!: number;

  constructor() {}

  public setLayoutInfoForChild(childComps: ErcBaseUnitComponent[]) {
    const maxIndex = childComps.length - 1;
    childComps.forEach((comp, index) => {
      comp.onSetLayoutInfo({
        layer: 1,
        index,
        maxIndex,
      });
    });
  }

  public getBorderStyle(showBorder: boolean): string {
    const borderStyle = this.spacing + 'px';
    return showBorder ? borderStyle : '0';
  }
}

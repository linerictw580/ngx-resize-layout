import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export class ErcBaseUnitComponent {
  /**represents the layer count of this row or column (root layer is `1`) */
  public layer!: number;
  /**is this row or column the first sibling in the same layer */
  public first!: boolean;
  /**is this row or column the last sibling in the same layer */
  public last!: boolean;
  /**the order index of this row or column among siblings (0-base) */
  public index!: number;
  @Input() templates!: any[];

  public get isRootLayer(): boolean {
    return this.layer === 1;
  }

  constructor() {}
}

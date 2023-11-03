import { AfterViewInit, Component, HostBinding, Input } from '@angular/core';
import { ErcLayoutInfo } from '../../models/resize.model';
import { LayoutService } from '../../layout.service';

@Component({
  template: '',
})
export class ErcBaseUnitComponent implements AfterViewInit {
  @HostBinding('style.border-top-width') borderTopWidth!: string;
  @HostBinding('style.border-bottom-width') borderBottomWidth!: string;
  @HostBinding('style.border-left-width') borderLeftWidth!: string;
  @HostBinding('style.border-right-width') borderRightWidth!: string;

  public type!: 'row' | 'column';
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

  protected layoutService!: LayoutService;

  public displayHandle!: boolean;

  constructor(layoutService: LayoutService) {
    this.layoutService = layoutService;
  }

  /**
   * call this function for each projected row / column in `AfterContentInit` callback
   * so every layout component can know its position (e.g. order index and layer)
   * @param info
   */
  onSetLayoutInfo(info: ErcLayoutInfo) {
    const { layer, index, maxIndex } = info;
    this.layer = layer;
    this.index = index;
    this.first = index === 0;
    this.last = index === maxIndex;

    if (this.type === 'row') {
      this.displayHandle = this.isRootLayer || (!this.isRootLayer && !this.last);
    } else if (this.type === 'column') {
      this.displayHandle = !this.last;
    }

    // console.log('onSetLayoutInfo', { layer, type: this.type, index });
  }

  ngAfterViewInit(): void {
    this._setLayoutBorders();
  }

  private _setLayoutBorders() {
    const layout = this.layoutService;
    if (this.type === 'row') {
      this.borderTopWidth = layout.getBorderStyle(this.first && this.isRootLayer);
      this.borderBottomWidth = layout.getBorderStyle(
        this.isRootLayer || (!this.isRootLayer && !this.last)
      );
      this.borderLeftWidth = layout.getBorderStyle(this.isRootLayer);
      this.borderRightWidth = layout.getBorderStyle(this.isRootLayer);
    } else if (this.type === 'column') {
      this.borderRightWidth = layout.getBorderStyle(!this.last);
    }
  }
}

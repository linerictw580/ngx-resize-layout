import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { ErcRowConfig } from '../../models/resize.model';
import { ErcBaseUnitComponent } from '../base-unit/base-unit.component';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'erc-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcRowComponent extends ErcBaseUnitComponent implements OnInit, AfterViewInit {
  @HostBinding('style.border-top-width') borderTopWidth!: string;
  @HostBinding('style.border-bottom-width') borderBottomWidth!: string;
  @HostBinding('style.border-left-width') borderLeftWidth!: string;
  @HostBinding('style.border-right-width') borderRightWidth!: string;

  @Input() config!: ErcRowConfig;

  constructor(private _layoutService: LayoutService) {
    super();
  }

  ngOnInit(): void {
    console.log('erc-row ngOnInit', { index: this.index, first: this.first, last: this.last });
  }

  ngAfterViewInit(): void {
    // position info is first received on AfterViewInit
    console.log('erc-row ngAfterViewInit', {
      layer: this.layer,
      index: this.index,
      first: this.first,
      last: this.last,
    });

    this.borderTopWidth = this._getBorderStyle(this.first && this.isRootLayer);
    this.borderBottomWidth = this._getBorderStyle(
      this.isRootLayer || (!this.isRootLayer && !this.last)
    );
    this.borderLeftWidth = this._getBorderStyle(this.isRootLayer);
    this.borderRightWidth = this._getBorderStyle(this.isRootLayer);
  }

  private _getBorderStyle(showBorder: boolean): string {
    const spacingStyle = this._layoutService.spacing + 'px';
    return showBorder ? spacingStyle : '0';
  }
}

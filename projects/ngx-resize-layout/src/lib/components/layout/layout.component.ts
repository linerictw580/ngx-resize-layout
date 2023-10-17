import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnInit,
  QueryList,
  ViewContainerRef,
} from '@angular/core';
import { ErcLayoutConfig } from '../../models/resize.model';
import { ErcRowComponent } from '../row/row.component';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'erc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcLayoutComponent implements OnInit, AfterContentInit {
  @HostBinding('style.--spacing') public spacing = '8px';

  @ContentChildren(ErcRowComponent) private _ercRows!: QueryList<ErcRowComponent>;

  @Input() config!: ErcLayoutConfig;

  constructor(
    private _vcr: ViewContainerRef,
    private _layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this._layoutService.spacing = this.config.spacing ?? 8;

    this.spacing = `${this._layoutService.spacing}px`;
  }

  ngAfterContentInit(): void {
    // set info for each row components after content is projected
    // we need to do this for each row component to know its position (e.g. row order index and layer)
    const maxIndex = this._ercRows.length - 1;
    this._ercRows.forEach((ercRow, index) => {
      ercRow.layer = 1;
      ercRow.index = index;
      ercRow.first = index === 0;
      ercRow.last = index === maxIndex;
    });

    console.log('erc-layout ngAfterContentInit');
  }
}

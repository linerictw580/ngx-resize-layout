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
  providers: [LayoutService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcLayoutComponent implements OnInit, AfterContentInit {
  @HostBinding('style.--spacing') public spacing!: string;
  @HostBinding('style.--border-color') public borderColor!: string;

  @ContentChildren(ErcRowComponent) private _ercRows!: QueryList<ErcRowComponent>;

  @Input() config!: ErcLayoutConfig;

  constructor(
    private _vcr: ViewContainerRef,
    private _layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this._layoutService.spacing = this.config.spacing ?? 8;

    this.spacing = `${this._layoutService.spacing}px`;
    this.borderColor = this.config.borderColor ?? '#aaa';
  }

  ngAfterContentInit(): void {
    this._layoutService.setLayoutInfoForChild(this._ercRows.toArray());

    console.log('erc-layout ngAfterContentInit');
  }
}

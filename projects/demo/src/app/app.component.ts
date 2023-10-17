import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ErcLayoutConfig } from 'ngx-resize-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: ErcLayoutConfig = {
    rows: [
      {
        id: 'row1',
      },
      {
        id: 'row2',
      },
      {
        id: 'row3',
      },
    ],
  };

  constructor(private _vcr: ViewContainerRef) {}
}

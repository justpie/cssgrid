import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { GridPosition, GridArea } from './cssgrid.interfaces';

@Component({
    selector: 'cssgrid-item',
    standalone: true,
    imports: [],
    template: `<ng-content></ng-content>`
})
export class CssgridItemComponent implements OnInit {
    
    @HostBinding('style.grid-area') gridArea: String = "";
    @HostBinding('style.place-self') girdPlaceSelf: String = '';
    
    @Input() justify: GridPosition = 'start';  
    @Input() align: GridPosition = 'start';
    @Input() area: GridArea|String = {
      rowStart: 1,
      colStart: 1, 
      rowEnd: 2,
      colEnd: 2
    };  
  
    ngOnInit() {
      this.gridArea = this.joinGridArea(this.area);
      this.girdPlaceSelf = this.align + ' ' + this.justify;
    }
  
    joinGridArea(x: GridArea|String): String {
      if (typeof x == 'object') {
        const tmp = (x as GridArea);
        return tmp.rowStart + '/' + tmp.colStart + '/' + tmp.rowEnd + '/' + tmp.colEnd;
      }      
      return x;
    }
}
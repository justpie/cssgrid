import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { GridDisplay, GridPosition, GridInput, GridRepeat, GridSpread, GridAlign, GridSpacing, GridMinMax, FitContent } from './cssgrid.interfaces';

@Component({
  selector: 'cssgrid',
  standalone: true,
  template: `<ng-content select="cssgrid-item"></ng-content>`
})

export class CssgridComponent implements OnInit {
  @HostBinding('style.display') @Input() display: GridDisplay = 'grid';
  @HostBinding('style.grid-template-columns') gridColumns: String = '';
  @HostBinding('style.grid-template-rows') gridRows: String = '';
  @HostBinding('style.gap') gap: String = '0px 0px';
  @HostBinding('style.place-items') placeItems: String = 'start start';
  @HostBinding('style.place-content') placeContent: String = 'start start';
  @HostBinding('style.grid-auto-columns') gridAutoColumns: String = '';
  @HostBinding('style.grid-auto-rows') gridAutoRows: String = '';
  @HostBinding('style.grid-template-areas') gridTemplateAreas: String = "";


  @Input() justifyItems: GridPosition = 'start';
  @Input() alignItems: GridAlign = 'start';
  @Input() justifyContent: GridSpacing = 'start';
  @Input() alignContent: GridSpacing = 'start';
  @Input() columns: GridSpread[] = [];
  @Input() rows: GridSpread[] = [];
  @Input() autoColumns: GridSpread[] = [];
  @Input() autoRows: GridSpread[] = [];
  @Input() rowGap: GridInput = {
    value: 0,
    unit: 'px'
  };
  @Input() columnGap: GridInput = {
    value: 0,
    unit: 'px'
  };
  @Input() templateAreas: String[][] = [];



  ngOnInit(): void {
    this.gridColumns = this.columns.map((x: GridSpread) => this.joinCssInput(x)).join(" ");
    this.gridRows = this.rows.map((x: GridSpread) => this.joinCssInput(x)).join(" ");
    this.gap = this.joinCssInput(this.rowGap) + ' ' + this.joinCssInput(this.columnGap);
    this.placeItems = this.alignItems + ' ' + this.justifyItems;
    this.placeContent = this.alignContent + ' ' + this.justifyContent;
    this.gridAutoColumns = this.autoColumns.map((x: GridSpread) => this.joinCssInput(x)).join(" ");
    this.gridAutoRows = this.autoRows.map((x: GridSpread) => this.joinCssInput(x)).join(" ");
    this.gridTemplateAreas = this.templateAreas.map((x: String[]) => "'" + x.map((x:String) => x.replace(/\s/g, '')).join(" ") + "'" ).join("\n"); 
  }


  isGridSpread(input: any): String {
    if (typeof input !== 'object')
      return 'string';

    if ('value' in input && 'unit' in input)
      return 'gridInput';

    if ('value' in input && Object.keys(input).length === 1)
      return 'fitContent';

    if ('count' in input && 'value' in input)
      return 'gridRepeat';

    if ('min' in input && 'max' in input)
      return 'gridMinMax';

    return 'string';
  }

  joinCssInput(x: GridSpread): String {

    const interfaceType = this.isGridSpread(x);
    let tmp;
    
    switch (interfaceType) {
      case 'gridInput':
        tmp = (x as GridInput)
        return tmp.value + tmp.unit;
      case 'gridRepeat':
        tmp = (x as GridRepeat)
        return 'repeat(' + tmp.count + "," + this.joinCssInput(tmp.value) + ')';
      case 'gridMinMax':
        tmp = (x as GridMinMax)
        return 'minmax(' + this.joinCssInput(tmp.min) + "," + this.joinCssInput(tmp.max) + ')';
      case 'fitContent':
        tmp = (x as FitContent)
        return 'fit-content(' + this.joinCssInput(tmp.value) + ')';
      case 'string':
      default:
        return (x as String);
    }
  }
}

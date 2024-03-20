# Angular Type Enforced CSS Grid

The following library allows you to build CSS Grids via Angular components.

### \<cssgrid\> Input Options

| @Input | Type | Default Value
|---|---|---|
| justifyItems | GridPosition | 'start' |
| alignItems | GridAlign | 'start' |
| justifyContent | GridSpacing | 'start' |
| alignContent | GridSpacing | 'start' |
| columns | GridSpread[] | [] |
| rows | GridSpread[] | [] |
| autoColumns | GridSpread[] | [] |
| autoRows | GridSpread[] | [] |
| rowGap | GridInput | 0px |
| columnGap | GridInput | 0px |
| templateAreas | String[][] | [] |

### \<cssgrid-item\> Input Options

| @Input | Type |
|---|---|
|justify|GridPosition|
|align|GridPosition|
|area|GridArea\|String|


## Example

```HTML
<cssgrid
    [display]="display"
    [columns]="columns"
    [rows]="rows"
    [columnGap]="gap"
    [rowGap]="gap">
    <cssgrid-item 
        ngFor="let item of items"
        [area]="item.area"
        [justify]="item.justify"
        [align]="item.justify">
            //Place Grid Items Here
    </cssgrid-item>
</cssgrid>
```
```javascript
export class AppComponent {
    display:GridDisplay = 'grid';
    gap: GridInput = {
        value: 1,
        unit: 'em',
    };
    rows: GridSpread[] = [
        {
            value: 1,
            unit: 'fr',
        },
        {
            value: 3,
            unit: 'fr',
        },
        {
            value: 1,
            unit: 'fr',
        },
    ];

    columns: GridSpread[] = [
        {
            count: 3,
            value: {
                value: 1,
                unit: 'fr',
            },
        } as GridRepeat,
    ];

    items = [
        {
            area: {
                rowStart: 1,
                rowEnd: 2,
                colStart: 1,
                colEnd: 2,
            },
            justify: 'start' as GridPosition,
            align: 'start' as GridPosition,
        },
        {
            area: {
                rowStart: 2,
                rowEnd: 3,
                colStart: 2,
                colEnd: 3,
            },
            justify: 'center' as GridPosition,
            align: 'center' as GridPosition,
        },
        {
            area: {
                rowStart: 3,
                rowEnd: 4,
                colStart: 3,
                colEnd: 4,
            },
            justify: 'end' as GridPosition,
            align: 'end' as GridPosition,
        },
    ];
}
```

### Interfaces

```Typescript
export interface GridInput {
    value: Number;
    unit: Unit;
}
```
```Typescript
export interface GridRepeat {
    count: Number;
    value: GridInput | GridMinMax | FitContent
}
```
```Typescript
export interface FitContent {
    value: GridInput
}
```
```Typescript
export interface GridMinMax {
    min: GridInput;
    max: GridInput;
}
```
```Typescript
export interface GridArea {
    rowStart: Number;
    rowEnd: Number;
    colStart: Number;
    colEnd: Number
}
```

### Type Guards
| Type | Values |
|---|---|
| GridPosition | 'start', 'end', 'center', 'stretch' |
| GridAlign | GridPosition, 'start', 'end', 'center', 'stretch', 'baseline' |
| GridSpacing | GridPosition, 'space-around', 'space-between', 'space-evenly' |
| GridDefault |  "none", "auto", "initial", "inherit", "revert", "revert-layer", "unset", "min-content", "max-content" |
| GridSpread |  GridDefault, GridInput, GridRepeat, GridMinMax, FitContent |
| Unit | 'px', 'em', 'rem', 'vw', 'vh', 'fr', '%' |
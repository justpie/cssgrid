export type GridDisplay = "grid" | "inline-grid";
export type GridPosition = 'start' | 'end' | 'center' | 'stretch';
export type GridAlign = GridPosition | 'baseline';
export type GridSpacing = GridPosition | 'space-around' | 'space-between' | 'space-evenly';
export type GridDefault = "none" | "auto" | "initial" | "inherit" | "revert" | "revert-layer" | "unset" | "min-content" | "max-content";
export type GridSpread = GridDefault | GridInput | GridRepeat | GridMinMax | FitContent;
export type Unit = 'px' | 'em' | 'rem' | 'vw' | 'vh' | 'fr' | '%';

export interface GridInput {
    value: Number;
    unit: Unit;
}
export interface GridRepeat {
    count: Number;
    value: GridInput | GridMinMax | FitContent
}
export interface FitContent {
    value: GridInput
}
export interface GridMinMax {
    min: GridInput;
    max: GridInput;
}
export interface GridArea {
    rowStart: Number;
    rowEnd: Number;
    colStart: Number;
    colEnd: Number
}
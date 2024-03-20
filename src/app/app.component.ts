import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssgridComponent, CssgridItemComponent } from 'cssgrid';
import {
    GridInput,
    GridDisplay,
    GridSpread,
    GridPosition
} from 'cssgrid';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CssgridComponent, CssgridItemComponent, CommonModule],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'cssgrid';
    
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
        },
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

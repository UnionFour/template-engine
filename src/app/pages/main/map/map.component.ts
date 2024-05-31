import { Component } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent {
    public points: {coords: number[], properties: ymaps.IPlacemarkProperties}[] = [
        {
            coords: [56.84254206447026,60.64530862437186],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Шаурма-Ауфф</strong>',
                    '<br/>',
                    'Дешевая и вкусная шаурма и прочие вкусности в виде выпечки',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.84405608641395,60.65399166931147],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Столовая ГУК\'а</strong>',
                    '<br/>',
                    'Не зря же здесь всегда полно народу: вкусно и дешево',
                    '</address>',
                ].join(''),
            }
        }
    ];
}

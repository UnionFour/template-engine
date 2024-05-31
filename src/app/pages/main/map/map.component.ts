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
                    '<strong>Зал футбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 35/а',
                    '<br/>',
                    'Зал для тренировок младшей группы',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.84405608641395,60.65399166931147],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Зал баскетбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 66',
                    '<br/>',
                    'Зал для тренировок старшей группы',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.84155606786889,60.654337999999996],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Зал футбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 35/а',
                    '<br/>',
                    'Зал для тренировок младшей группы',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.83989636680168,60.65098611780828],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Зал баскетбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 66',
                    '<br/>',
                    'Зал для тренировок старшей группы',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.842497067871264,60.643791499999985],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Зал футбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 35/а',
                    '<br/>',
                    'Зал для тренировок младшей группы',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.841788449199086,60.637593682882255],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Зал баскетбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 66',
                    '<br/>',
                    'Зал для тренировок старшей группы',
                    '</address>',
                ].join(''),
            }
        },
        {
            coords: [56.83837827306169,60.63821523065366],
            properties: {
                balloonContentBody: [
                    '<address>',
                    '<strong>Зал футбола</strong>',
                    '<br/>',
                    'ул. Мира, д. 35/а',
                    '<br/>',
                    'Зал для тренировок младшей группы',
                    '</address>',
                ].join(''),
            }
        },
    ];
}

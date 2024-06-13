import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../../../core/models/map/address';
import { Point } from '../../../../core/models/map/point'

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    @Input() public addresses: Address[] = [];

    public points: Point[] = [];

    ngOnInit() {
        this.points = this.addresses.map((address): Point => {
            return {
                coords: [Number(address.alt), Number(address.lat)],
                properties: {
                    balloonContentBody: [
                      '<address>',
                      '<strong>',
                      address.description,
                      '</strong>',
                      '<br/>',
                      address.address,
                      '<br/>',
                      'Зал для тренировок младшей группы',
                      '</address>',
                    ].join(''),
                }
            }
        })
    }
}

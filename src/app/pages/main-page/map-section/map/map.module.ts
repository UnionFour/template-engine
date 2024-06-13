import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { MapComponent } from "./map.component";
import { NgModule } from "@angular/core";
import { NgForOf, NgIf } from "@angular/common";

const mapConfig: YaConfig = {
    apikey: '8c2cdcb1-d99b-4933-bae4-58cac30e0d02',
    lang: 'ru_RU',
};

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        AngularYandexMapsModule.forRoot(mapConfig),
        NgForOf,
        NgIf
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule { }

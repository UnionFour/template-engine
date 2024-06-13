import { Injectable } from '@angular/core';
import  config  from '../../../../config.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data = config;

  get data() {
    return this._data;
  }

  get displayHeroImageSection() {
    return true;
  }

  get displayAboutSection() {
    return this.data.main && this.data.main.title
      && this.data.main.text;
  }

  get displayNewsSection() {
    return this.data.news && this.data.news.title
      && this.data.news.news;
  }

  get displayMapSection() {
    return this.data.addresses && this.data.addresses.title
      && this.data.addresses.addresses;
  }

  get displayInstructorsSection() {
    return this.data.main && this.data.main.title
      && this.data.main.text;
  }

  get displayServicesSection() {
    return this.data.services && this.data.services.title
      && this.data.services.services;
  }

  constructor() { }

}

import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import jsonData from '../../../assets/landmark.json'


@Component({
  selector: 'app-lanmark',
  templateUrl: './lanmark.component.html',
  styleUrls: ['./landmark.component.scss']
})
export class LandmarkComponent {
  landmarks = jsonData;
  lanmark : any;
  countrySet = new Set<string>();
  countries : any;
  country = '';
  landmarkBycountry = new Array<any>();
  isMultiple = false;
  constructor(){
    // console.log(jsonData)
    this.lanmark = this.landmarks[0];
    this.landmarks.forEach(element => {
      this.countrySet.add(element.country);
    });
    this.countries = Array.from(this.countrySet)
    console.log(this.countries)
  }

  searchByCountry(){
    this.landmarkBycountry = new Array<any>();
    this.landmarks.forEach(element => {
      if(element.country == this.country){
          this.landmarkBycountry.push(element)
      }
    });
    this.landmarks = this.landmarkBycountry[0];
  }

  Search(id : any){
    for(let index = 0;index < this.landmarks.length;index++){
      if(this.landmarks[index].idx == id){
        this.lanmark = this.landmarks[index]
        break;
      }
    }
  }
}

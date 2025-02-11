import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }

  Images = [
    {
      image: "galleria1.jpg"
    },
    {
      image: "galleria2.jpg"
    },
    {
      image: "galleria3.jpg"
    },
    {
      image: "galleria4.jpg"
    },
    {
      image: "galleria5.jpg"
    },
    {
      image: "galleria6.jpg"
    },
    {
      image: "galleria7.jpg"
    },
    {
      image: "galleria8.jpg"
    },
    {
      image: "galleria9.jpg"
    },
    {
      image: "galleria10.jpg"
    },
  ]

  getImages(){
    return this.Images;
  }
}

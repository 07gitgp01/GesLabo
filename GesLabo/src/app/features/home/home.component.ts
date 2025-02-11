import { Component, Inject, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/shared/services/homeServices/home-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { Tag } from 'primeng/tag';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: any = [];
  responsiveOptions: any=[];

  constructor(private homeService: HomeServiceService){}
  ngOnInit(): void {

    this.products=this.homeService.getImages();
    console.log("products :", this.products);

    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
}

  loggedInClick1: boolean = false;
  signedUpClick2: boolean = false;

  visible: boolean = false;

  position: string = 'center';

  recuponLoggedInClick(response: boolean){
    this.loggedInClick1 = response;
    this.signedUpClick2 = false;
    this.visible = true;

    console.log('loggin value: ', this.loggedInClick1);
  }

  recuponSignedUpClick(response: boolean){
    this.signedUpClick2 = response;
    this.loggedInClick1 = false;
    this.visible = true;

    console.log('signup value: ', this.signedUpClick2);
  }

  recuponHomeClick(response: boolean){
    this.signedUpClick2 = response;
    this.loggedInClick1 = response;
    
  }

  // Cette partie est pour recuperer les données depuis login////////////////////////////////////////////////////////////////////////:

  loginLoggedInValue1: boolean=true;
  loginLoggedInValue2: boolean=false;
  changeHeader: boolean =false;
  displayAppLogin: boolean=false;

  recupLoginOnClick(response: boolean){
    this.loginLoggedInValue1 = false;
    this.loginLoggedInValue2 = response;
    this.changeHeader = response;
  }

  // Cette partie est pour recuperer les données depuis login////////////////////////////////////////////////////////////////////////:

    showDialog(position: string) {
        this.position = position;
        this.visible = true;
        
    }

}

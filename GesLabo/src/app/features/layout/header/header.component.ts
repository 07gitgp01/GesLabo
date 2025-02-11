import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Cette partie est pour envoyer les données dans home////////////////////////////////////////////////////////////////////////:
  connected= false;
  loggedInClick=false;
  signedUpClick=false;
// @Input() connected;
@Output()  towardHomeLoggedInClick = new EventEmitter<boolean>();
@Output()  towardHomeSignedUpClick = new EventEmitter<boolean>();
@Output()  towardHomeClick = new EventEmitter<boolean>();

onLoggedInClick(loggedInClick: boolean){
  // this.loggedInClick = true;
  this.towardHomeLoggedInClick.emit(loggedInClick);
  console.log('header loggin onclick value:', loggedInClick);
}

onSignedUpClick(signedUpClick: boolean){
  // this.signedUpClick = true;
  this.towardHomeSignedUpClick.emit(signedUpClick);
  console.log('header signed ug up onclick value:', signedUpClick);

}
onHomeClick(homeClick: boolean){
  this.towardHomeClick.emit(homeClick);
}

  // Cette partie est pour recuperer les données depuis login////////////////////////////////////////////////////////////////////////:
@Input() changeHeader!: boolean;
loginLoggedInValue1: boolean=true;
loginLoggedInValue2: boolean=false;
displayAppLogin: boolean=false;

recupLoginOnClick(response: boolean){
  if(this.changeHeader){
    this.loginLoggedInValue1 = false;
    this.loginLoggedInValue2 = response;
  }
  console.log('header signed ug up onclick value1:', this.loginLoggedInValue1);
  console.log('header signed ug up onclick value2:', this.loginLoggedInValue2);

}

}

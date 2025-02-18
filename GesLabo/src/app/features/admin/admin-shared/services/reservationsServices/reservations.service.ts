import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService implements OnInit {
  liste = [];
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  url = "https://youssouf.pythonanywhere.com/api/reservations/reservations";

  getListe() {
    return this.http.get(this.url);
    
  }

  reservationsAjout(value:any): void {
      let val = value;
      let body = {
        id: value.id,  
        firstName: value.firstName,
        lastName: value.lastName,
        phone: value.phone,
        email: value.email,
        role: value.role,
      
      }
  
      console.log('submit value since the service :', body);
      this.http.post(this.url, body).subscribe((res) => {
        console.log('res dans services', res)
      });
    }



}

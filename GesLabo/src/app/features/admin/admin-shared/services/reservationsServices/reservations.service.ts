import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService{
  liste = [];
  constructor(private http: HttpClient) { }

  private url = "/api/reservations/reservations";
  private username = "sana";
  private password = "sana";

  getListe(): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
      })
    };
    return this.http.get<any[]>(this.url, headers);
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

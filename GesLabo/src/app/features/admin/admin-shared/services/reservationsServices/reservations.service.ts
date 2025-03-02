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


    add(reservations: any): Observable<any> {
      console.log('entré du service :', reservations)
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
        })
      };
      return this.http.post<any>(this.url, reservations, headers);
      console.log('Sortie/ apres post du service :', reservations);
    
    }
    
    update(id: string, reservations: any){
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Basic'+ btoa(this.username + ':' + this.password)
        })
      };
      return this.http.put<any>(this.url + '/' + reservations.id, reservations, headers);
    }
    
    delete(id: string): Observable<any> {
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
        })
      };
      return this.http.delete<any>(this.url + '/' + id, headers);
    }
    
    getReservationsById(id: string): Observable<any> {
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
        })
      };
      return this.http.get<any>(this.url + '/' + id, headers);
    }
    
    getReservationsByName(name: string): Observable<any> {
      const headers = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
        })
      };
      return this.http.get<any>(this.url + '/name/' + name, headers);
    }



}

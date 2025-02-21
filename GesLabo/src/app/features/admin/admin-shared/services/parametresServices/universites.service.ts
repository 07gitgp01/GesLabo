import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UniversitesService {

  liste = [];
  constructor(private http: HttpClient) { }

  private url = "/api/parameters/universites";
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

}

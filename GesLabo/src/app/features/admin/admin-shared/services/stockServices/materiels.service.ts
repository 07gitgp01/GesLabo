import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterielsService {
  liste = [];
  constructor(private http: HttpClient) { }

  private url = "/api/stocks/materiels";
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

  getById(id: number): Observable<any> {
    const headers = {
      headers: new HttpHeaders({
        'Authorization': 'Basic'+ btoa(this.username + ':' + this.password)
      })
    };
    return this.http.get<any>(this.url + '/' + id, headers);
  }

add(materiel: any): Observable<any> {
  console.log('entré du service :', materiel)
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.post<any>(this.url, materiel, headers);
  console.log('Sortie/ apres post du service :', materiel);

}

update(id: string, materiel: any){
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic'+ btoa(this.username + ':' + this.password)
    })
  };
  return this.http.put<any>(this.url + '/' + materiel.id, materiel, headers);
}

delete(id: string): Observable<any> {
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.delete<any>(this.url + '/' + id, headers);
}

getMaterielById(id: string): Observable<any> {
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.get<any>(this.url + '/' + id, headers);
}

getMaterielByName(name: string): Observable<any> {
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.get<any>(this.url + '/name/' + name, headers);
}

  
}

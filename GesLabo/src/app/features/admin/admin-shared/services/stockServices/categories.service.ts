import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  liste = [];
  constructor(private http: HttpClient) { }

  private url = "/api/stocks/categories";
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

add(categories: any): Observable<any> {
  console.log('entré du service :', categories)
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.post<any>(this.url, categories, headers);
  console.log('Sortie/ apres post du service :', categories);

}

update(id: string, categories: any){
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic'+ btoa(this.username + ':' + this.password)
    })
  };
  return this.http.put<any>(this.url + '/' + categories.id, categories, headers);
}

delete(id: string): Observable<any> {
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.delete<any>(this.url + '/' + id, headers);
}

getCategoriesById(id: string): Observable<any> {
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.get<any>(this.url + '/' + id, headers);
}

getCategoriesByName(name: string): Observable<any> {
  const headers = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    })
  };
  return this.http.get<any>(this.url + '/name/' + name, headers);
}


}

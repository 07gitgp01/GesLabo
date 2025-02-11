import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/models/globaleModel';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {


  url ='http://localhost:3000/client';
  constructor(private http: HttpClient) { }
  getclient() {
    return this.http.get(this.url);
  }

  addClient(value: Client): void {
    let val = value;
    let body = {
      id: value.id, 
      name: value.name,
      email: value.email,
      adresse: value.adresse,
      phone: value.phone,
      status: value.status,
      subscriptionPlan: value.subscriptionPlan,
      password: value.password,
      employees: []


    }

    console.log('submit value since the service :', body);
    this.http.post(this.url, body).subscribe((res) => {
      console.log('res dans services', res)
    });
  }

  getClient() {

  }

}



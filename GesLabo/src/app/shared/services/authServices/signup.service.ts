import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/models/globaleModel';
import { ClientServiceService } from '../clientDasboardServices/clientService/client-service.service';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
 url='http://localhost:3000/task';
   constructor(private http: HttpClient,private signup: ClientServiceService) { }
   getsignup() {
     return this.http.get(this.url);
   }
 
  addTask(value: Client): void {
     let val = value;
     let body = {
       id: value.id,
       name: value.name,
       adresse: value.adresse,
       phone: value.phone,
       status: value.status,
       subscriptionPlan: value.subscriptionPlan,
       password: value.password
     
     }
 
     console.log('submit value since the service :', body);
     this.http.post(this.url, body).subscribe((res) => {
       console.log('res dans services', res)
     });
   }
   
   getSignup() {
   
   }
 
}

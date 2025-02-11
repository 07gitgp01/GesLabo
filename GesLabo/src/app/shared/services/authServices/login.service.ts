import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { longin } from '../../models/globaleModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url='http://localhost:3000/task';
   constructor(private http: HttpClient) { }
   getsignup() {
     return this.http.get(this.url);
   }
 
  addLogin(value: longin): void {
     let val = value;
     let body = {
      
       email: value.email,
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

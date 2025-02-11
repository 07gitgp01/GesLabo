import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/shared/models/clientDasboardModels/ticketModel/ticketing_models_ts';
 // import Task from task.ts file

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  url='http://localhost:3000/task';
   constructor(private http: HttpClient) { }
   gettask() {
     return this.http.get(this.url);
   }
 
   addTask(value: Task): void {
     let val = value;
     let body = {
       id: value.id,  
      description: value.description,
       status: value.status,
       assignedTo: value.assignedTo,
       comments: value.comments,
       deadline: value.deadline,
       creationDate: value.creationDate,
       completionDate: value.completionDate,
       lastUpdated: value.lastUpdated
     
     }
 
     console.log('submit value since the service :', body);
     this.http.post(this.url, body).subscribe((res) => {
       console.log('res dans services', res)
     });
   }
   
   getTask() {
   
   }
 
}

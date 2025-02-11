import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/shared/models/globaleModel';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    constructor(private http: HttpClient) { }
    url = 'http://localhost:3000/ticket';
    getticket() {
        return this.http.get(this.url);
    }

    addEmployee(value: Ticket): void {
        let val = value;
        let body = {
            id: value.id,
            titre: value.titre,
            description: value.description,
            priority: value.priority,
            status: value.status,
            createDate: value.createdDate,
            updateDate: value.createdDate,
            completionDate: value.completionDate,
            initiator: value.initiator,
            assignedEmployees: value.assignedEmployees,
         /*   tasks: value.tasks*/
            

        }

        console.log('submit value since the service :', body);
        this.http.post(this.url, body).subscribe((res) => {
            console.log('res dans services', res)
        });
    }

    getEmployees() {

    }
    

};
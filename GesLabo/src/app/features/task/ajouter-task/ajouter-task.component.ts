import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TaskServiceService } from 'src/app/shared/services/clientDasboardServices/taskService/task-service.service';



@Component({
  selector: 'app-ajouter-task',
  templateUrl: './ajouter-task.component.html',
  styleUrls: ['./ajouter-task.component.css']
})
export class AjouterTaskComponent {
   form: FormGroup;
  constructor(private fb: FormBuilder, private taskService: TaskServiceService ) {
      this.form = this.fb.group({
        id: ['', Validators.required],
        description: ['', Validators.required],
        status: ['TO_DO', Validators.required],
        assignedTo: ['', Validators.required],
        comments: [this.fb.array([], Validators.required),],
        deadline: [''],
        creationDate: [new Date(), Validators.required],
        completionDate: [''],
        lastUpdated: [new Date(), Validators.required]
      });
    }
  
    
  
    onSubmit() {
      if (this.form.valid) {
        const { value: newTask } = this.form;
        console.log('task:', newTask);
        this.taskService.addTask(newTask);
        this.form.reset();
        console.log('Task added successfully');
      } else {
        console.log('Form is invalid');
      }
    }
 

}

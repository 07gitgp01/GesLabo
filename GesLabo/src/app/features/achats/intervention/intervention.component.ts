import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      status: ['TO_DO', Validators.required],
      assignedTo: [null],
      comments: this.fb.array([], Validators.required),
      deadline: [''],
      creationDate: [new Date(), Validators.required],
      completionDate: [''],
      lastUpdated: [new Date(), Validators.required]
    });
  }

  

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}

import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent {
  notificationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      id: [this.generateId(), Validators.required],
      type: ['EMAIL', Validators.required],
      content: ['', [Validators.required, Validators.minLength(5)]],
      ticketId: ['', Validators.required],
      recipient: ['', [Validators.required, Validators.email]], // Validation pour email ou téléphone
      sentDate: [new Date(), Validators.required],
    });
  }
  onInit(): void {

  }
  // Générer un ID unique
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  // Soumettre le formulaire
  onSubmit() {
    if (this.notificationForm.valid) {
      console.log(this.notificationForm.value);
      alert('Notification enregistrée avec succès!');
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }

}

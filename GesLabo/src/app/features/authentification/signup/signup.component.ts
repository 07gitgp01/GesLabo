import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { ClientServiceService } from '../../../shared/services/clientDasboardServices/clientService/client-service.service';
import { SignupService } from 'src/app/shared/services/authServices/signup.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formulaire: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientServiceService) {


    this.formulaire = new FormGroup(
      {
        id: new FormControl(this.generateId(), Validators.required),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
       adresse: new FormControl('', [Validators.required,Validators.minLength(6)]),
        phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
        status: new FormControl('', [Validators.required,]),
        subscriptionPlan: new FormControl('', [Validators.required,]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required]),
      },

      { validators: this.passwordMatchValidator } // Ajout du validateur ici
    );

  }
  passwordMatchValidator(formGroup: AbstractControl) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }
  onSubmit() {
    if (this.formulaire.valid) {
      const { value: newclient } = this.formulaire;
      console.log('Client Created:', newclient);

      this.clientService.addClient(newclient);

      // Forcer la réinitialisation après un court délai
      setTimeout(() => {
        this.formulaire.reset();
      }, 0);
    } else {
      console.log('Form Invalid');
    }
  }
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15); // Génère un identifiant unique
  }

}

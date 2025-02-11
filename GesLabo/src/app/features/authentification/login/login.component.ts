import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/authServices/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formule: FormGroup;
  // loggedInOnClick: boolean = false;
  @Output() towardHeaderOnClick = new EventEmitter<boolean>();

  constructor(private router: Router,fb:FormBuilder,private loginService:LoginService ) {
    this.formule = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    
  }

  onloggedInOnClick(loggedInOnClick: boolean){
    // this.loggedInOnClick=true;
    this.towardHeaderOnClick.emit(loggedInOnClick);
    console.log('login page onClick value: ', loggedInOnClick);
    this.router.navigate(['/auth/ticket'])
  }
  onSubmit() {
    if (this.formule.valid) {
      const { value: newclient } = this.formule;
      console.log('Client Created:', newclient);

      this.loginService.addLogin(newclient);

      // Forcer la réinitialisation après un court délai
      setTimeout(() => {
        this.formule.reset();
      }, 0);
    } else {
      console.log('Form Invalid');
    }
  }
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15); // Génère un identifiant unique
  }


}

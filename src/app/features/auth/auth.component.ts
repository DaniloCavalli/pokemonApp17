import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

    
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  authForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(){
    console.log(this.authForm.valid)

    if(this.authForm.valid){

      const username = this.authForm.get('username')?.value as string;
      const password = this.authForm.get('password')?.value as string;

      // Call the authentication service's login method
      if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
        this.router.navigate(['/home']);
      } else {
        // Handle authentication error (show error message, etc.)
      }

    }
  }


}

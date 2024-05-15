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
      const username = this.authForm.get('username')?.value as string;
      const password = this.authForm.get('password')?.value as string;

      // validate user and password
      if(username === 'pippo' && password === 'pass123!'){
        this.authService.login(username, password);
        this.router.navigate(['/home']);
      } else {
        this.authForm.controls.username.setErrors({'incorrect': true});
        this.authForm.controls.password.setErrors({'incorrect': true});
      }

  }


}

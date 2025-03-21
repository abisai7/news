import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly authService: AuthService, private readonly fb: FormBuilder, private readonly router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

   onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.login(this.loginForm.value);
   }

  login(loginForm: any): void {
    this.authService.login(loginForm).subscribe(
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/news']);
    }
  }

}

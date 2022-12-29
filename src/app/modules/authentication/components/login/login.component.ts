import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}

  get username(): string {
    return this.form.get('username')?.value;
  }

  get password(): string {
    return this.form.get('password')?.value;
  }

  onLoginClick() {
    if (!this.form.valid) {
      return;
    }

    this.authService.saveToLocalStorage({
      username: this.username,
      password: this.password,
    });

    this.router.navigate(['/companies']).then((r) => console.log(r));
  }

  ngOnInit() {
    if (this.authService.isValidStorage()) {
      this.router.navigate(['/companies']).then((r) => console.log(r));
    }

    this.form = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}

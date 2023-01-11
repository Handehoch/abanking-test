import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  private emailRegex: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onLoginClick() {
    this.authService.saveToLocalStorage({
      email: this.email?.value,
      password: this.password?.value,
    });

    this.toastr.success('Successfully logged in!', 'Success!');
    this.redirect('companies');
  }

  private redirect(urn: string) {
    this.router.navigate([`/${urn}`]).then(() => console.log());
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.redirect('companies');
    }

    this.form = this.fb.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.emailRegex),
      ]),
      password: new FormControl(null, Validators.required),
    });
  }
}

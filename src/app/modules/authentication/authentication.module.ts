import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
    }),
  ],
  exports: [LoginComponent],
})
export class AuthenticationModule {}

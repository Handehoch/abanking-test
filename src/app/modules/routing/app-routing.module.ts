import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from '../companies/components/companies/companies.component';
import { CompanyComponent } from '../companies/components/company/company.component';
import { LoginComponent } from '../authentication/components/login/login.component';
import { AuthGuard } from '../../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'companies/:id',
        component: CompanyComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from '../companies/components/companies/companies.component';
import { CompanyComponent } from '../companies/components/company/company.component';
import { LoginComponent } from '../authentication/components/login/login.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { CreateCompanyComponent } from '../companies/components/create-company/create-company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'companies/:id',
    component: CompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateCompanyComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

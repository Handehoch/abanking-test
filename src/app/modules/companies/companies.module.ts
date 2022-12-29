import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyComponent } from './components/company/company.component';

@NgModule({
  declarations: [CompaniesComponent, CompanyCardComponent, CompanyComponent],
  imports: [CommonModule],
  exports: [CompaniesComponent, CompanyCardComponent, CompanyComponent],
})
export class CompaniesModule {}

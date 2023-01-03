import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyComponent } from './components/company/company.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { CompaniesService } from './services/companies.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CompaniesFilterPipe } from '../../shared/pipes/companies-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyCardComponent,
    CompanyComponent,
    HeaderComponent,
    CompaniesFilterPipe,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    CompaniesService,
    {
      provide: 'BASE_URL',
      useValue: 'https://random-data-api.com/api',
    },
  ],
  exports: [CompaniesComponent, CompanyCardComponent, CompanyComponent],
})
export class CompaniesModule {}

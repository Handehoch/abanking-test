import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyComponent } from './components/company/company.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { CompaniesService } from './services/companies.service';
import { CompaniesFilterPipe } from '../../shared/pipes/companies-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyCardComponent,
    CompanyComponent,
    CompaniesFilterPipe,
    CreateCompanyComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AngularYandexMapsModule.forRoot({
      apikey: 'a6fa52ee-0f34-44df-b03c-155a735afaf3',
    }),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
    }),
  ],
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

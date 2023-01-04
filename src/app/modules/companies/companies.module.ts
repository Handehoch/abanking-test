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

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyCardComponent,
    CompanyComponent,
    CompaniesFilterPipe,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AngularYandexMapsModule.forRoot({
      apikey: '263e6893-db9f-4678-a749-e9bf0feb97bb',
      lang: 'en_US',
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

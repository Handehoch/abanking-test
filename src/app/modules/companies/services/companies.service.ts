import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICompany } from '../models/company.interface';
import { CachingService } from './caching.service';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  companies: ICompany[] = [];

  constructor(
    @Inject('BASE_URL') private readonly baseUrl: string,
    @Inject('LIFE_TIME') private readonly LIFE_TIME: number,
    private readonly http: HttpClient,
    private readonly cachingService: CachingService
  ) {}

  getCompanies(size: number): Observable<ICompany[]> {
    return this.http
      .get<ICompany[]>(`${this.baseUrl}/company/random_company`, {
        params: {
          size: size ?? undefined,
        },
      })
      .pipe(
        map((companies) => {
          this.companies =
            this.cachingService.getFromLocalStorage(
              this.cachingService.companiesKey
            ) || [];

          this.companies.push(...companies);
          this.cachingService.setToLocalStorage<ICompany[]>(
            this.cachingService.companiesKey,
            this.companies
          );

          return this.companies;
        })
      );
  }

  getCompanyById(companyId: number): ICompany {
    const companies = this.cachingService.getFromLocalStorage<ICompany[]>(
      this.cachingService.companiesKey
    ) as ICompany[];

    const cachedCompany = this.cachingService.getFromLocalStorage<ICompany>(
      companyId.toString()
    );

    if (!cachedCompany) {
      const company = companies.filter((c) => c.id == companyId)[0];
      this.cachingService.setToLocalStorage(companyId.toString(), company);
      return company;
    }

    return cachedCompany;
  }
}

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompany } from '../models/company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  companies: ICompany[] = [];
  constructor(
    @Inject('BASE_URL') private readonly baseUrl: string,
    private readonly http: HttpClient
  ) {}

  getCompanies(size: number): Observable<ICompany[]> {
    const companies$ = this.http.get<ICompany[]>(
      `${this.baseUrl}/company/random_company`,
      {
        params: {
          size: size ?? undefined,
        },
      }
    );

    companies$.subscribe((data) => {
      this.companies = [...this.companies, ...data];
    });

    return companies$;
  }

  getCompanyById(companyId: number): ICompany {
    return this.companies.filter((c) => c.id == companyId)[0];
  }
}

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICompany } from '../models/company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  companies: ICompany[] = [];
  constructor(
    @Inject('BASE_URL') private readonly baseUrl: string,
    @Inject('LIFE_TIME') private readonly LIFE_TIME: number,
    private readonly http: HttpClient
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
          this.companies = [...this.companies, ...companies];
          console.log(this.companies);
          return [...this.companies, ...companies];
        })
      );
  }

  getCompanyById(companyId: number): ICompany {
    return this.companies.filter((c) => c.id == companyId)[0];
  }
}

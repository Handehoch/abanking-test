import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICompany } from '../models/company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  companies$!: Observable<ICompany[]>;
  constructor(
    @Inject('BASE_URL') private readonly baseUrl: string,
    private readonly http: HttpClient
  ) {}

  getCompanies(size: number): Observable<ICompany[]> {
    this.companies$ = this.http.get<ICompany[]>(
      `${this.baseUrl}/company/random_company`,
      {
        params: {
          size: size ?? undefined,
        },
      }
    );

    return this.companies$;
  }

  getCompanyById(companyId: number): Observable<ICompany> {
    return this.companies$?.pipe(
      map((companies) => companies.filter((c) => c.id === companyId)[0])
    );
  }
}

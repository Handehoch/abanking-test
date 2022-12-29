import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompany } from '../models/company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(
    @Inject('BASE_URL') private readonly baseUrl: string,
    private readonly http: HttpClient
  ) {}

  getCompanies(size: number): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(`${this.baseUrl}/company/random_company`, {
      params: {
        size: size ?? undefined,
      },
    });
  }
}

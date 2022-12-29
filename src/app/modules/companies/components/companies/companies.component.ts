import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Observable } from 'rxjs';
import { ICompany } from '../../models/company.interface';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService],
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<ICompany[]> | undefined;
  public pageSize: number = 16;
  constructor(private readonly companiesService: CompaniesService) {}

  getCompanies(): void {
    this.companies$ = this.companiesService.getCompanies(this.pageSize);
  }

  ngOnInit(): void {
    this.getCompanies();
  }
}

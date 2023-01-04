import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { ICompany } from '../../models/company.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  form!: FormGroup;
  companies: ICompany[] = [];
  public pageSize: number = 8;
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly fb: FormBuilder
  ) {}

  get query(): string {
    return this.form.get('query')?.value;
  }

  get search(): string {
    return this.form.get('search')?.value;
  }

  getCompanies(): void {
    this.companiesService.getCompanies(this.pageSize).subscribe(() => {
      // Из-за отсутсвия БД пришлось хранить компании в сервисе
      // и перезаписывать в компоненту текущие компании
      this.companies = [...this.companiesService.companies];
    });
  }

  onScrollDown(): void {
    this.getCompanies();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      query: new FormControl(null),
      search: new FormControl(null),
    });
    this.getCompanies();
  }
}

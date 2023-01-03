import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { Observable } from 'rxjs';
import { ICompany } from '../../models/company.interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  form!: FormGroup;
  companies$: Observable<ICompany[]> | undefined;
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
    this.companies$ = this.companiesService.getCompanies(this.pageSize);
  }

  onSearch(): void {}

  ngOnInit(): void {
    this.form = this.fb.group({
      query: new FormControl('Option'),
      search: new FormControl(null),
    });
    this.getCompanies();
  }
}

import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { ICompany } from '../../models/company.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  id!: number;
  company: ICompany | undefined;
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.company = this.companiesService.getCompanyById(this.id);
    });
  }
}

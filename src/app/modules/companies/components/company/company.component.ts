import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { ICompany } from '../../models/company.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit, OnDestroy {
  id!: number;
  company: ICompany | undefined;
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      if (!localStorage.getItem(this.id.toString())) {
        this.company = this.companiesService.getCompanyById(this.id);
        localStorage.setItem(this.id.toString(), JSON.stringify(this.company));
        return;
      }

      const companyStr = localStorage.getItem(this.id.toString());

      if (companyStr) {
        this.company = JSON.parse(companyStr);
      }
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem(this.id.toString());
  }
}

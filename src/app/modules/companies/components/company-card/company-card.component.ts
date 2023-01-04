import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../../models/company.interface';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
})
export class CompanyCardComponent implements OnInit {
  @Input('company') company!: ICompany;

  constructor() {}

  ngOnInit(): void {}
}

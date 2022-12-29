import { Component } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  providers: [CompaniesService],
})
export class CompaniesComponent {}

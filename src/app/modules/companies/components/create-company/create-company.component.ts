import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICreateCompanyDto } from '../../models/create-company.dto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss'],
})
export class CreateCompanyComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {}

  get name() {
    return this.form.get('name')?.value;
  }

  get activity() {
    return this.form.get('activity')?.value;
  }

  get russian() {
    return this.form.get('russian')?.value;
  }

  onFormSubmit(): void {
    const company: ICreateCompanyDto = {
      business_name: this.name,
      industry: this.activity,
      isRussian: this.russian,
    };

    console.log(company);
    this.toastr.success('Company successfully created', 'Success!');
    this.router.navigate(['/companies']).catch((err) => console.log(err));
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
      ]),
      activity: new FormControl(null, Validators.required),
      russian: new FormControl(null, Validators.required),
    });
  }
}

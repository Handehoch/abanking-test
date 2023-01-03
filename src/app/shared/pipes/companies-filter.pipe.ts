import { NgIterable, Pipe, PipeTransform } from '@angular/core';
import { ICompany } from '../../modules/companies/models/company.interface';

@Pipe({
  name: 'companiesFilter',
})
export class CompaniesFilterPipe implements PipeTransform {
  transform(
    value: ICompany[] | null | undefined,
    ...args: string[]
  ): NgIterable<any> {
    const [query, search] = args;

    if (!this.isValid(query) || !this.isValid(search)) {
      return value as ICompany[];
    }

    const res = (value as ICompany[]).filter((c) =>
      (c[query as keyof ICompany] as string)
        .toLowerCase()
        .match(search.toLowerCase())
    );

    console.log(res);
    return res;
  }

  private isValid(query: string) {
    return query !== null && query !== undefined && query !== '';
  }
}

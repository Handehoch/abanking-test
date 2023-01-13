import { Pipe, PipeTransform } from '@angular/core';
import { ICompany } from '../../modules/companies/models/company.interface';
import { CachingService } from '../../modules/companies/services/caching.service';

@Pipe({
  name: 'companiesSort',
})
export class CompaniesSortPipe implements PipeTransform {
  constructor(private readonly cachingService: CachingService) {}

  transform(
    value: ICompany[] | null | undefined,
    ...args: boolean[]
  ): ICompany[] {
    if (args[0]) {
      return (value as ICompany[]).sort((a, b) =>
        a.business_name.localeCompare(b.business_name)
      );
    } else {
      return this.cachingService.getFromLocalStorage<ICompany[]>(
        this.cachingService.companiesKey
      ) as ICompany[];
    }
  }
}

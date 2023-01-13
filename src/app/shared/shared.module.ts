import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { CompaniesFilterPipe } from './pipes/companies-filter.pipe';
import { CompaniesSortPipe } from './pipes/companies-sort.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    InputErrorComponent,
    CompaniesFilterPipe,
    CompaniesSortPipe,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    InputErrorComponent,
    CompaniesFilterPipe,
    CompaniesSortPipe,
  ],
})
export class SharedModule {}

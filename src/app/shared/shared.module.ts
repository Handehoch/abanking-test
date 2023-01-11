import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputErrorComponent } from './components/input-error/input-error.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    InputErrorComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    InputErrorComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [LayoutComponent],
})
export class LayoutModule { }

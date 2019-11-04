import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from './loader/loader.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoaderModule,
    FontAwesomeModule
  ],
  exports: [LoaderModule, FontAwesomeModule]
})
export class SharedModule { }

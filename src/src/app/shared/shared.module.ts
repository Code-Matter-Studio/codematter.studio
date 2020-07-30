import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MarkdownModule } from 'ngx-markdown';

import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MarkdownModule],
})
export class SharedModule {}

import { NgModule } from '@angular/core'
import { registerLocaleData, CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'

import en from '@angular/common/locales/en'

registerLocaleData(en)

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
  ],
  providers: [],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}

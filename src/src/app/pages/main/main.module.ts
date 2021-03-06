import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ParticlesModule } from 'ngx-particle'

// Modules
import { MainRoutingModule } from './main-routing.module'
import { SharedModule } from '@shared/shared.module'
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

// Components
import { MainComponent } from './main.component'

@NgModule({
  imports: [MainRoutingModule, RecaptchaModule, RecaptchaFormsModule, SharedModule, HttpClientModule, ParticlesModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}

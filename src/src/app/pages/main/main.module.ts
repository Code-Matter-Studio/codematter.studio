import { NgModule } from '@angular/core'
import { ParticlesModule } from 'ngx-particle'

// Modules
import { MainRoutingModule } from './main-routing.module'
import { SharedModule } from '@shared/shared.module'
import { HttpClientModule } from '@angular/common/http'

// Components
import { MainComponent } from './main.component'

@NgModule({
  imports: [MainRoutingModule, SharedModule, HttpClientModule, ParticlesModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}

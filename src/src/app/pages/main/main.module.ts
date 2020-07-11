import { NgModule } from '@angular/core';

// Modules
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}

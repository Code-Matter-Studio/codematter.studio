import { NgModule } from '@angular/core';

// Modules
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}

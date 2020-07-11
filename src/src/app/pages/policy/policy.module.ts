import { NgModule } from '@angular/core';

// Modules
import { PolicyRoutingModule } from './policy-routing.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { PolicyComponent } from './policy.component';

@NgModule({
  imports: [
    PolicyRoutingModule,
    SharedModule,
  ],
  declarations: [PolicyComponent],
  exports: [PolicyComponent],
})
export class PolicyModule {}

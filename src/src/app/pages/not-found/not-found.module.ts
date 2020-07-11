import { NgModule } from '@angular/core';

// Modules
import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    NotFoundRoutingModule,
    SharedModule,
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}

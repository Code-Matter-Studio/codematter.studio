import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Components
import { PolicyComponent } from './policy.component'

const routes: Routes = [{ path: '', component: PolicyComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyRoutingModule {}

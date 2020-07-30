import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from '@layouts/layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'policy',
    component: LayoutComponent,
    loadChildren: () => import('./pages/policy/policy.module').then((m) => m.PolicyModule),
  },
  {
    path: 'blog',
    component: LayoutComponent,
    loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: '404',
    component: LayoutComponent,
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

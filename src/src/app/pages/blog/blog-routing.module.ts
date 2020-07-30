import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { BlogListComponent } from './list/blog-list.component';
import { BlogPostComponent } from './post/blog-post.component';

// Resolvers
import { BlogListResolver } from './list/blog-list-resolver.servise';
import { BlogPostResolver } from './post/blog-post-resolver.servise';

const routes: Routes = [
  { path: '', component: BlogListComponent, resolve: { posts: BlogListResolver } },
  { path: ':id', component: BlogPostComponent, resolve: { post: BlogPostResolver }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

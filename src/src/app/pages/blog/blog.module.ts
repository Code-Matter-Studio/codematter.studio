import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '@shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module'

// Components
import { BlogListComponent } from './list/blog-list.component';
import { BlogPostComponent } from './post/blog-post.component';

@NgModule({
  imports: [SharedModule, BlogRoutingModule],
  declarations: [BlogListComponent, BlogPostComponent],
  exports: [BlogListComponent, BlogPostComponent],
})
export class BlogModule {}

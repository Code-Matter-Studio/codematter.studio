import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// Services
import { BlogService } from '@pages/blog/blog.service';

// Models
import { BlogModel } from '@models/blog-model';

@Injectable()
export class BlogListResolver implements Resolve<BlogModel> {
  constructor(private blogService: BlogService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<BlogModel> | Promise<BlogModel> | BlogModel {
    return this.blogService.getPosts();
  }
}

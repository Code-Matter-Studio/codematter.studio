import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Environments
import { environment } from '@env/environment';

// Models
import { BlogModel } from '@models/blog-model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http
      .get(environment.apiUri + '/blogs/articles?$fields=data(id,author(name(firstName,lastName)),created,title)')
      .pipe(
        map((response: BlogModel) => {
          return response;
        }),
      );
  }

  getPostById(id) {
    return this.http
      .get(
        environment.apiUri +
          `/blogs/articles/${id}?$fields=id,author(about,name(firstName,lastName)),content,created,title`,
      )
      .pipe(
        map((response: BlogModel) => {
          return response;
        }),
      );
  }
}

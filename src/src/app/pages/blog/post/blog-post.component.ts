import { Component } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import * as moment from 'moment';

// Models
import { BlogModel } from '@models/blog-model';

interface DataItem {
  id: number;
  title: string;
  author: {
    fullName: string;
    about: string;
  };
  content: string;
  created: string;
  relativeCreated: string;
}

@Component({
  selector: 'app-policy',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
  dataItem: DataItem;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(
      (data: Data) => {
        this.dataItem = {
          id: data.post.id,
          title: data.post.title,
          author: {
            fullName: `${data.post.author.name.firstName} ${data.post.author.name.lastName}`,
            about: data.post.author.about,
          },
          content: data.post.content,
          created: moment(data.post.created.iso).local().format('MMMM Do YYYY'),
          relativeCreated: moment(data.post.created.iso).startOf('hour').fromNow(),
        };
      },
      (error: any) => console.log(error),
    );
  }
}

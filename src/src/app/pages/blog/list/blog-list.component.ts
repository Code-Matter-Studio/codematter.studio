import { Component } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import * as moment from 'moment';

// Models
import { BlogModel } from '@models/blog-model';

interface DataItem {
  id: number;
  title: string;
  author: string;
  created: string;
  relativeCreated: string;
}

@Component({
  selector: 'app-policy',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  listOfData: DataItem[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(
      (data: Data) => {
        data.posts.data.map((record: BlogModel) => {
          this.listOfData.push({
            id: record.id,
            title: record.title,
            author: `${record.author.name.firstName} ${record.author.name.lastName}`,
            created: moment(record.created.iso).local().format('MMMM Do YYYY'),
            relativeCreated: moment(record.created.iso).startOf('hour').fromNow(),
          });
        });
      },
      (error: any) => console.log(error),
    );
  }
}

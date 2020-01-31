import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  links$: Observable<any> = this.scully.available$.pipe(
    map(t => t.filter(a => a.route.indexOf('/blog/') >= 0)),
  );

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit(): void {
  }

}

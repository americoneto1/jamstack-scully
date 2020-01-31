import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { BlogPostsComponent } from './blog-posts.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostsComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule
  ],
})
export class BlogModule {}

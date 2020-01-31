import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPostsComponent } from './blog-posts.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPostsComponent,
  },
  {
    path: ':slug',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}


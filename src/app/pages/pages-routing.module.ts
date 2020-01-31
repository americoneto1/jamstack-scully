import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: ':name',
    component: PagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}


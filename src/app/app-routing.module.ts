import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/sobre'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

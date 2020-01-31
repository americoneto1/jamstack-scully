import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, ScullyLibModule],
})
export class PagesModule {}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class PagesComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}

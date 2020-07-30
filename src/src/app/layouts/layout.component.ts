import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  showHeader: boolean;
  loading: boolean = true;

  constructor(private _router: Router) {
    this.showHeader = new RegExp('(/#[^s]+)').test(_router.url) || _router.url === '/';
  }

  async ngOnInit() {
    this.loading = false;
  }
}

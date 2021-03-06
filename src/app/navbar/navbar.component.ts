import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  @Output('isNavbarCollapsed') isNavbarCollapsed: boolean;
  constructor() {
    this.closeNavbar();
  }

  ngOnInit() {

    this.closeNavbar();
  }

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}

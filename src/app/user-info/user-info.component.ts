import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnInit {
  user = null;
  username: string = null;
  avatar: string = null;

  constructor(public auth: AuthService, public navbar: NavbarComponent) {

   }

  ngOnInit() {

  }

  public login() {
    this.auth.googleLogin();
  }

  public logout() {
    this.auth.logout();
    this.navbar.closeNavbar();
    this.avatar = null;
  }
}

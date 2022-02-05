import { Component, OnInit } from '@angular/core';
import {UserService} from "../../@core/services/user.service";
import {catchError, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.css']
})
export class AppLoadingComponent implements OnInit {

  constructor(
      private userService: UserService,
      private router: Router,
  ) { }

  ngOnInit(): void {
      this.userService.getUser()
          .subscribe((response) => {

          }, (error) => {
              this.router.navigateByUrl('/auth')
          })
  }

}
